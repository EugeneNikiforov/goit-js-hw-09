var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return o[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){n[e]=o},e.parcelRequired7c6=t);var i=t("iQIUW");function r(e,o){return new Promise(((n,t)=>{const i=Math.random()>.3;setTimeout((()=>{i?n({position:e,delay:o}):t({position:e,delay:o})}),o)}))}document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();const o=e.currentTarget.elements,n=Number(o.delay.value),t=Number(o.step.value),u=Number(o.amount.value);!function(e,o,n){for(let t=1;t<=n;t+=1)1===t?l=e:l+=o,s=t,r(s,l).then((({position:e,delay:o})=>{i.Notify.success(`✅ Fulfilled promise ${e} in ${o}ms`),console.log(`✅ Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{i.Notify.failure(`❌ Rejected promise ${e} in ${o}ms`),console.log(`❌ Rejected promise ${e} in ${o}ms`)}))}(n,t,u)}));let l=0,s=0;
//# sourceMappingURL=03-promises.d293d4d1.js.map
