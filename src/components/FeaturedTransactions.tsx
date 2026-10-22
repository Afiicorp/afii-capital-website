"use client";
import { useEffect, useRef, useState } from "react";
import { transactionSlides } from "./transactionSlides";
export default function FeaturedTransactions() {
 const [index,setIndex]=useState(0); const [paused,setPaused]=useState(false); const touch=useRef<number|null>(null);
 useEffect(()=>{if(paused||transactionSlides.length<2)return;const timer=window.setInterval(()=>setIndex(i=>(i+1)%transactionSlides.length),4500);return()=>window.clearInterval(timer)},[paused]);
 if(!transactionSlides.length)return null;
 const shift=(n:number)=>setIndex(i=>(i+n+transactionSlides.length)%transactionSlides.length);
 return <section className="afii-featured-transactions" aria-label="Some Interesting Transactions" onMouseEnter={()=>setPaused(true)} onMouseLeave={()=>setPaused(false)} onTouchStart={e=>{touch.current=e.touches[0].clientX;setPaused(true)}} onTouchEnd={e=>{if(touch.current!==null){const d=e.changedTouches[0].clientX-touch.current;if(Math.abs(d)>35)shift(d<0?1:-1)}touch.current=null;setPaused(false)}}>
  <div className="afii-featured-heading"><div><span className="eyebrow">TRANSACTION HIGHLIGHTS</span><h3>Some Interesting Transactions</h3></div><div className="afii-featured-actions"><button type="button" onClick={()=>shift(-1)} aria-label="Previous transaction">←</button><button type="button" onClick={()=>shift(1)} aria-label="Next transaction">→</button></div></div>
  <div className="afii-featured-grid">{[0,1].map((offset)=><figure className="afii-featured-card" key={offset}><img src={transactionSlides[(index+offset)%transactionSlides.length]} alt={`AFII published transaction reference ${(index+offset)%transactionSlides.length+1}`} loading="lazy" /></figure>)}</div><p className="afii-featured-caption">Selected published transaction materials. Images are presented for reference; they do not indicate current transaction status.</p>
 </section>
}
