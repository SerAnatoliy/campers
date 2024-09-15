"use strict";(self.webpackChunkcampers=self.webpackChunkcampers||[]).push([[147],{485:(e,n,t)=>{t.r(n),t.d(n,{default:()=>X});const r=t.p+"static/media/home.afe15dc7080085cbd619.png";var i=t(43),o=t(464);const a={small:o.AH`
    width: 160px;
  `,medium:o.AH`
    width: 166px;
  `,large:o.AH`
    width: 173px;
  `},s=o.Ay.button`
  display: inline-flex;
  padding: 16px 40px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 200px;
  background: #e44848;

  color: #fff;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.08px;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background: #d84343;
  }

  ${e=>a[e.size]}
`;o.Ay.button`
  display: inline-flex;
  padding: 16px 32px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: #fff;

  border-radius: 200px;
  border: 1px solid rgba(71, 84, 103, 0.2);

  color: #101828;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.08px;
  outline: none;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    border: 1px solid #e44848;
  }
`;var l=t(579);const d=e=>{let{children:n,size:t,type:r,onClick:i}=e;return(0,l.jsx)(s,{type:r,size:t,onClick:i,children:n})};var c=t(950);const p=o.Ay.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1200;
  background: rgba(18, 20, 23, 0.5);
`,x=o.Ay.div`
  position: absolute;
  top: 50%;
  left: 50%;
  overflow: hidden;
  transform: translate(-50%, -50%);
  border-radius: 20px;
`,u=document.querySelector("#modal-root"),h=e=>{let{children:n,onClose:t}=e;(0,i.useEffect)((()=>{const e=e=>{"Escape"===e.code&&t()};return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)}}),[t]);return(0,c.createPortal)((0,l.jsx)(p,{onClick:e=>{e.currentTarget===e.target&&t()},children:(0,l.jsx)(x,{children:n})}),u)},m=o.Ay.div`
  padding: 24px;
  border-radius: 10px;
  border: 1px solid rgba(16, 24, 40, 0.2);
  width: 400px;
  background-color: #fff;
`,g=o.Ay.div`
  margin-bottom: 24px;
`,f=o.Ay.h2`
  color: #101828;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`,y=o.Ay.h3`
  color: #475467;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`,b=o.Ay.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: flex-start;
`,j=o.Ay.label``,v=o.Ay.input`
  padding: 18px;
  border-radius: 10px;
  background: #f7f7f7;
  border: none;

  color: rgba(16, 24, 40, 0.6);
  font-size: 16px;
  line-height: 20px;
  width: 365px;
`,w=o.Ay.textarea`
  border-radius: 10px;
  background: #f7f7f7;
  padding: 18px;

  color: rgba(16, 24, 40, 0.6);
  font-size: 16px;
  line-height: 20px;
  border: none;
  width: 365px;
`,k=()=>{const[e,n]=(0,i.useState)({name:"",email:"",date:"",comment:""}),t=t=>{const{name:r,value:i}=t.target;n({...e,[r]:i})};return(0,l.jsxs)(m,{children:[(0,l.jsxs)(g,{children:[(0,l.jsx)(f,{children:"Book your campervan now"}),(0,l.jsx)(y,{children:"Stay connected! We are always ready to help you."})]}),(0,l.jsxs)(b,{onSubmit:n=>{n.preventDefault(),console.log(e)},children:[(0,l.jsx)(j,{children:(0,l.jsx)(v,{pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' ][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",type:"text",id:"name",name:"name",placeholder:"Name",value:e.name,onChange:t,required:!0})}),(0,l.jsx)(j,{children:(0,l.jsx)(v,{pattern:"/^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$/",type:"email",id:"email",name:"email",placeholder:"Email",value:e.email,onChange:t,required:!0})}),(0,l.jsx)(j,{children:(0,l.jsx)(v,{min:"2024-01-01",max:"2099-04-20",type:"date",id:"date",name:"date",placeholder:"Booking date",value:e.date,onChange:t,required:!0})}),(0,l.jsx)(j,{children:(0,l.jsx)(w,{pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' ][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",id:"comment",name:"comment",rows:"5",placeholder:"Comment",value:e.comment,onChange:t,required:!0})}),(0,l.jsx)(d,{type:"submit",size:"small",children:"Submit"})]})]})},A=t.p+"static/media/hero.20ea1df801cae7d5b9c3.jpg";var z,C;function E(){return E=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},E.apply(null,arguments)}function W(e,n){let{title:t,titleId:r,...o}=e;return i.createElement("svg",E({width:32,height:32,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":r},o),t?i.createElement("title",{id:r},t):null,z||(z=i.createElement("path",{d:"M24 8L8 24",strokeWidth:3,strokeLinecap:"round",strokeLinejoin:"round"})),C||(C=i.createElement("path",{d:"M8 8L24 24",strokeWidth:3,strokeLinecap:"round",strokeLinejoin:"round"})))}const q=i.forwardRef(W),H=(t.p,o.Ay.div`
  display: flex;
  background: linear-gradient(to right, rgba(47, 48, 58, 0.4), rgba(47, 48, 58, 0.4)), url(${A});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 1440px;
  height: 480px;
  border-radius: 20px;
`),L=o.Ay.div`
  padding: 200px 0px 0px 840px;
`,S=o.Ay.div`
  font-size: 44px;
  color: #fff;
  margin-bottom: 40px;
`,O=o.Ay.div`
  background-color: #fff;
  padding: 10px 40px 50px 40px;
  border-radius: 20px;
  width: 450px;
`,B=(0,o.Ay)(q)`
  display: flex;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  stroke: #101828;
  margin-left: auto;
  margin-bottom: 10px;
  &:hover {
    stroke: #e44848;
  }
`,Z=()=>{const[e,n]=(0,i.useState)(!1),t=()=>{n(!e)};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(H,{children:(0,l.jsxs)(L,{children:[(0,l.jsx)(S,{children:"Captivating adventures await you!"}),(0,l.jsx)(d,{type:"button",size:"small",onClick:()=>t(),children:"Book now"})]})}),e&&(0,l.jsx)(h,{onClose:()=>t(),children:(0,l.jsxs)(O,{children:[(0,l.jsx)(B,{onClick:()=>t()}),(0,l.jsx)(k,{})]})})]})},F=t.p+"static/media/heroIn1.1533e4727b418280926b.jpg",I=t.p+"static/media/heroIn2.8d558522f4b5c990b33d.jpg",$=t.p+"static/media/heroIn3.32cda9749d63a7077a21.jpg",R=o.Ay.ul`
  display: flex;
  gap: 80px;
  list-style: none;
`,D=o.Ay.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 30px;
  /* padding: 30px; */
  width: 300px;
`,P=o.Ay.p`
  text-align: center;
`,M=()=>(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(R,{children:[(0,l.jsxs)(D,{children:[(0,l.jsx)("img",{src:F,width:"150px",alt:"Home1"}),(0,l.jsx)(P,{children:"With us, you can discover new horizons, setting off on travels without any limits. Our campers are not just means of transportation but also convenient and cozy places for your relaxation."})]}),(0,l.jsxs)(D,{children:[(0,l.jsx)("img",{src:I,width:"150px",alt:"Home2"}),(0,l.jsx)(P,{children:"Welcome to our website where dreams of travel become reality. Pack your bags, break the stereotypes, and embark on an unforgettable journey in our comfortable and stylish camper vans."})]}),(0,l.jsxs)(D,{children:[(0,l.jsx)("img",{src:$,width:"150px",alt:"Home3"}),(0,l.jsx)(P,{children:"Convenient booking, reliable service, and the most favorable conditions await you. Don't wait, allow yourself an adventure in style with our camper rental."})]})]})}),N=o.Ay.div`
  padding: 60px 0px 0px 0px;
`,Q=o.Ay.div`
  display: flex;
  padding: 100px 64px;
  flex-direction: column;
  align-items: center;
`,T=o.Ay.img`
  width: 350px;
  margin-bottom: 10px;
  width: 300px;
  height: 154px;
`,V=o.Ay.h1`
  font-size: 50px;
  margin-bottom: 100px;
  color: #474246;
  /* color: #e44848; */
  display: flex;
`,Y=o.Ay.p`
  font-size: 26px;
  font-style: italic;
  margin-bottom: 100px;
  text-align: center;
  color: #474246;
`,_=o.Ay.div`
  background-color: #fce4e4;
  border: 1px solid #b02525;
  padding: 60px;
  border-radius: 20px;
  color: #474246;
  margin-bottom: 60px;
  display: flex;
  gap: 100px;
`,G=o.Ay.h2`
  margin-bottom: 20px;
  font-size: 28px;
`,J=o.Ay.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,K=o.Ay.li``,U=o.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-style: italic;
  font-size: 20px;
`,X=()=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(N,{children:(0,l.jsx)(Z,{})}),(0,l.jsxs)(Q,{children:[(0,l.jsx)(V,{children:"Welcome to Rental Of Campers "}),(0,l.jsx)(Y,{children:"Embark on your next adventure with our fleet of top-quality campers. Whether you're planning a weekend getaway or a cross-country road trip, we have the perfect camper to suit your needs."}),(0,l.jsx)(M,{})]}),(0,l.jsxs)(_,{children:[(0,l.jsxs)("div",{children:[(0,l.jsx)(G,{children:"Why choose us?"}),(0,l.jsxs)(J,{children:[(0,l.jsxs)(K,{children:[(0,l.jsx)("strong",{children:"Diverse Fleet:"})," From cozy campervans to spacious RVs, we offer a wide range of options to accommodate solo travelers, couples, families, and groups of all sizes."]}),(0,l.jsxs)(K,{children:[(0,l.jsx)("strong",{children:"Quality Assurance:"})," Our campers undergo regular maintenance checks to ensure they are in excellent condition, providing you with a safe and comfortable travel experience."]}),(0,l.jsxs)(K,{children:[(0,l.jsx)("strong",{children:"Easy Booking:"})," With our user-friendly website and efficient booking system, securing your camper rental is quick and hassle-free."]}),(0,l.jsxs)(K,{children:[(0,l.jsx)("strong",{children:"Expert Support:"})," Have questions or need assistance? Our friendly and knowledgeable team is here to help. Whether you need travel tips or technical support during your journey, we've got you covered."]})]})]}),(0,l.jsxs)(U,{children:[(0,l.jsx)(T,{src:r,alt:"HomeImg"}),"Start planning your next adventure today! Browse our selection of campers and"," ",(0,l.jsx)("div",{children:"book your rental online"}),"Your unforgettable journey awaits with Camper Rentals."]})]})]})}}]);
//# sourceMappingURL=147.4a0b82af.chunk.js.map