"use client";
import { useState } from "react";
import "./globals.css";

export default function Home() {
  const [niche, setNiche] = useState("");
  const [region, setRegion] = useState("India");
  const [platform, setPlatform] = useState("Shorts/Reels");
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState("");

  async function handleGenerate(e) {
    e.preventDefault();
    if (!niche.trim()) return;
    setLoading(true);
    setOutput("");
    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ niche, region, platform })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Failed");
      setOutput(data.output);
    } catch (err) {
      setOutput(`Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  }

  function copyAll() {
    if (!output) return;
    navigator.clipboard.writeText(output);
  }

  return (
    <div className="container">
      <h1 style={{margin:0, fontSize:28}}>Agentic YouTube Creator</h1>
      <p className="small">Hinglish AI agent for viral Shorts + long-form. Copy-paste friendly output.</p>

      <div className="card" style={{marginTop:16}}>
        <div className="section-title">Input</div>
        <form onSubmit={handleGenerate} className="two-col" style={{marginTop:8}}>
          <div>
            <label>Niche / Topic</label>
            <input placeholder="e.g. Fitness for busy professionals" value={niche} onChange={e=>setNiche(e.target.value)} />
          </div>
          <div>
            <label>Region</label>
            <select value={region} onChange={e=>setRegion(e.target.value)}>
              <option>India</option>
              <option>US</option>
              <option>UK</option>
              <option>SEA</option>
              <option>Global</option>
            </select>
          </div>
          <div>
            <label>Primary Platform</label>
            <select value={platform} onChange={e=>setPlatform(e.target.value)}>
              <option>Shorts/Reels</option>
              <option>TikTok</option>
              <option>YouTube Long-form</option>
            </select>
          </div>
          <div style={{display:"flex", alignItems:"flex-end"}}>
            <button type="submit" disabled={loading}>{loading ? "Generating?" : "Generate"}</button>
          </div>
        </form>
      </div>

      <div className="card" style={{marginTop:16}}>
        <div className="section-title">Output</div>
        <div className="row" style={{marginBottom:8}}>
          <button className="copy" onClick={copyAll} disabled={!output}>Copy All</button>
        </div>
        <div className="output" style={{minHeight:140}}>{output || (loading ? "" : "Fill inputs aur Generate dabao.")}</div>
        <div className="footer">Always Hinglish. 3 variations of everything. Short-form pe focus.</div>
      </div>
    </div>
  );
}
