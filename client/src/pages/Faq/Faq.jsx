import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./Faq.scss";



const Faq = () => {
  const [open, setOpen] = React.useState(null);
  const [searchTerm, setSearchTerm] = useState('')
  const toggle = id => setOpen(open === id ? undefined : id)
  const [selected, setSelected] = useState(0);

  const menuItems = [
    "General",
    "GiftCards",
    "Crypto",
    "Referral"
  ]

  
 

  const generalfaq = [
    {
       id: 1,
      title :   "How do I download the app?", 
    content :<p>To play netball professionally in Nigeria, you can participate in the talent identification programs organized by the Nigerian Netball Federation (NNF). These programs, such as the Talent Identification Netball Centres (T.I.N.C), are designed to discover, empower, and equip talents of different age groups. By showcasing your skills and talent at these centres, you can be scouted and selected to join the national teams, including the senior team (Nigerian Net Stars) or the youth and junior teams. The NNF also organizes leagues and tournaments where talented players can compete and demonstrate their abilities. To find out more, read up on  <Link className="text-green-600 underline" to="/bnn"> our strategy </Link > , or <Link className="text-green-600 underline" to="/getinvolved"> get involved. </Link> </p>
    },
    {
     id: 2,
      title :   "How do I get started on the website?", 
      content: <p>If you aspire to become a netball coach in Nigeria, the Nigerian Netball Federation offers the Advancing Capacity Excellence (A.C.E.) program, which focuses on developing coaches, umpires (referees), and development officials. The NNF conducts regular workshop sessions under this program where you can receive training and upgrade your coaching skills. By participating in these workshops, you can gain the necessary knowledge and expertise to coach netball teams at various levels, including the national teams or local club teams. To find out more, read up on <Link className="text-green-600 underline" to="/bnn"> our strategy </Link > , or <Link className="text-green-600 underline" to="/getinvolved"> get involved. </Link> </p>
    },
    { id: 3,
      title :   "How do I make a fund deposit to my wallet?", 
    content : <p>To register a netball team in Nigeria, you can <Link className="text-green-600 underline" to="/contact" >contact us </Link>  for guidance and support. The NNF oversees netball and netball-adjacent activities on behalf of Nigeria and can provide you with the necessary information and requirements for team registration. You may need to submit details about your team's name, location, and contact information to complete the registration process. Being part of the NNF's league or tournaments can also help you get your team recognized and be part of the national netball ecosystem. To find out more, read up on  <Link className="text-green-600 underline" to="/bnn"> our strategy </Link > </p>
    },
    {
      id: 4,
      title :   "How do I  make withdrawals?", 
      content: <p>If you are interested in sponsoring any of our netball programmes, you can <Link className="text-green-600 underline" to="/contact"> get in touch with us </Link>  to explore partnership opportunities. The NNF is actively involved in various social impact initiatives, talent development programs, and netball-related events that offer sponsorship opportunities. By collaborating with the NNF, you can contribute to empowering young Nigerian girls, promoting netball, and making a positive impact on the community. The NNF will provide details about available programs and how your sponsorship can support their initiatives. To find out more, read up <Link className="text-green-600 underline" to="/bnn"> our strategy </Link > </p>
    },
    {
      id: 5,
      title :   "Is it possible to update my withdrawal bank account?", 
      content: <p>If you are interested in sponsoring any of our netball programmes, you can <Link className="text-green-600 underline" to="/contact"> get in touch with us </Link>  to explore partnership opportunities. The NNF is actively involved in various social impact initiatives, talent development programs, and netball-related events that offer sponsorship opportunities. By collaborating with the NNF, you can contribute to empowering young Nigerian girls, promoting netball, and making a positive impact on the community. The NNF will provide details about available programs and how your sponsorship can support their initiatives. To find out more, read up <Link className="text-green-600 underline" to="/bnn"> our strategy </Link > </p>
    },
  ]

  const giftfaq = [
    {
       id: 1,
      title :   "Is it possible to update my withdrawal bank account?", 
    content :<p>To play netball professionally in Nigeria, you can participate in the talent identification programs organized by the Nigerian Netball Federation (NNF). These programs, such as the Talent Identification Netball Centres (T.I.N.C), are designed to discover, empower, and equip talents of different age groups. By showcasing your skills and talent at these centres, you can be scouted and selected to join the national teams, including the senior team (Nigerian Net Stars) or the youth and junior teams. The NNF also organizes leagues and tournaments where talented players can compete and demonstrate their abilities. To find out more, read up on  <Link className="text-green-600 underline" to="/bnn"> our strategy </Link > , or <Link className="text-green-600 underline" to="/getinvolved"> get involved. </Link> </p>
    },
    {
     id: 2,
      title :   "How do I get started on the website?", 
      content: <p>If you aspire to become a netball coach in Nigeria, the Nigerian Netball Federation offers the Advancing Capacity Excellence (A.C.E.) program, which focuses on developing coaches, umpires (referees), and development officials. The NNF conducts regular workshop sessions under this program where you can receive training and upgrade your coaching skills. By participating in these workshops, you can gain the necessary knowledge and expertise to coach netball teams at various levels, including the national teams or local club teams. To find out more, read up on <Link className="text-green-600 underline" to="/bnn"> our strategy </Link > , or <Link className="text-green-600 underline" to="/getinvolved"> get involved. </Link> </p>
    },
    { id: 3,
      title :   "How do I make a fund deposit to my wallet?", 
    content : <p>To register a netball team in Nigeria, you can <Link className="text-green-600 underline" to="/contact" >contact us </Link>  for guidance and support. The NNF oversees netball and netball-adjacent activities on behalf of Nigeria and can provide you with the necessary information and requirements for team registration. You may need to submit details about your team's name, location, and contact information to complete the registration process. Being part of the NNF's league or tournaments can also help you get your team recognized and be part of the national netball ecosystem. To find out more, read up on  <Link className="text-green-600 underline" to="/bnn"> our strategy </Link > </p>
    },
    {
      id: 4,
      title :   "How do I  make withdrawals?", 
      content: <p>If you are interested in sponsoring any of our netball programmes, you can <Link className="text-green-600 underline" to="/contact"> get in touch with us </Link>  to explore partnership opportunities. The NNF is actively involved in various social impact initiatives, talent development programs, and netball-related events that offer sponsorship opportunities. By collaborating with the NNF, you can contribute to empowering young Nigerian girls, promoting netball, and making a positive impact on the community. The NNF will provide details about available programs and how your sponsorship can support their initiatives. To find out more, read up <Link className="text-green-600 underline" to="/bnn"> our strategy </Link > </p>
    },
    {
      id: 5,
      title :   "How do I download the app?", 
      content: <p>If you are interested in sponsoring any of our netball programmes, you can <Link className="text-green-600 underline" to="/contact"> get in touch with us </Link>  to explore partnership opportunities. The NNF is actively involved in various social impact initiatives, talent development programs, and netball-related events that offer sponsorship opportunities. By collaborating with the NNF, you can contribute to empowering young Nigerian girls, promoting netball, and making a positive impact on the community. The NNF will provide details about available programs and how your sponsorship can support their initiatives. To find out more, read up <Link className="text-green-600 underline" to="/bnn"> our strategy </Link > </p>
    },
  ]
  const cryptofaq = [
    {
       id: 1,
      title :   "How do I  make withdrawals?", 
    content :<p>To play netball professionally in Nigeria, you can participate in the talent identification programs organized by the Nigerian Netball Federation (NNF). These programs, such as the Talent Identification Netball Centres (T.I.N.C), are designed to discover, empower, and equip talents of different age groups. By showcasing your skills and talent at these centres, you can be scouted and selected to join the national teams, including the senior team (Nigerian Net Stars) or the youth and junior teams. The NNF also organizes leagues and tournaments where talented players can compete and demonstrate their abilities. To find out more, read up on  <Link className="text-green-600 underline" to="/bnn"> our strategy </Link > , or <Link className="text-green-600 underline" to="/getinvolved"> get involved. </Link> </p>
    },
    {
     id: 2,
      title :   "How do I get started on the website?", 
      content: <p>If you aspire to become a netball coach in Nigeria, the Nigerian Netball Federation offers the Advancing Capacity Excellence (A.C.E.) program, which focuses on developing coaches, umpires (referees), and development officials. The NNF conducts regular workshop sessions under this program where you can receive training and upgrade your coaching skills. By participating in these workshops, you can gain the necessary knowledge and expertise to coach netball teams at various levels, including the national teams or local club teams. To find out more, read up on <Link className="text-green-600 underline" to="/bnn"> our strategy </Link > , or <Link className="text-green-600 underline" to="/getinvolved"> get involved. </Link> </p>
    },
    { id: 3,
      title :   "How do I make a fund deposit to my wallet?", 
    content : <p>To register a netball team in Nigeria, you can <Link className="text-green-600 underline" to="/contact" >contact us </Link>  for guidance and support. The NNF oversees netball and netball-adjacent activities on behalf of Nigeria and can provide you with the necessary information and requirements for team registration. You may need to submit details about your team's name, location, and contact information to complete the registration process. Being part of the NNF's league or tournaments can also help you get your team recognized and be part of the national netball ecosystem. To find out more, read up on  <Link className="text-green-600 underline" to="/bnn"> our strategy </Link > </p>
    },
    {
      id: 4,
      title :   "How do I download the app?", 
      content: <p>If you are interested in sponsoring any of our netball programmes, you can <Link className="text-green-600 underline" to="/contact"> get in touch with us </Link>  to explore partnership opportunities. The NNF is actively involved in various social impact initiatives, talent development programs, and netball-related events that offer sponsorship opportunities. By collaborating with the NNF, you can contribute to empowering young Nigerian girls, promoting netball, and making a positive impact on the community. The NNF will provide details about available programs and how your sponsorship can support their initiatives. To find out more, read up <Link className="text-green-600 underline" to="/bnn"> our strategy </Link > </p>
    },
    {
      id: 5,
      title :   "Is it possible to update my withdrawal bank account?", 
      content: <p>If you are interested in sponsoring any of our netball programmes, you can <Link className="text-green-600 underline" to="/contact"> get in touch with us </Link>  to explore partnership opportunities. The NNF is actively involved in various social impact initiatives, talent development programs, and netball-related events that offer sponsorship opportunities. By collaborating with the NNF, you can contribute to empowering young Nigerian girls, promoting netball, and making a positive impact on the community. The NNF will provide details about available programs and how your sponsorship can support their initiatives. To find out more, read up <Link className="text-green-600 underline" to="/bnn"> our strategy </Link > </p>
    },
  ]

  const reffaq = [
    {
       id: 1,
      title :   "How do I download the app?", 
    content :<p>To play netball professionally in Nigeria, you can participate in the talent identification programs organized by the Nigerian Netball Federation (NNF). These programs, such as the Talent Identification Netball Centres (T.I.N.C), are designed to discover, empower, and equip talents of different age groups. By showcasing your skills and talent at these centres, you can be scouted and selected to join the national teams, including the senior team (Nigerian Net Stars) or the youth and junior teams. The NNF also organizes leagues and tournaments where talented players can compete and demonstrate their abilities. To find out more, read up on  <Link className="text-green-600 underline" to="/bnn"> our strategy </Link > , or <Link className="text-green-600 underline" to="/getinvolved"> get involved. </Link> </p>
    },
    {
     id: 2,
      title :   "How do I get started on the website?", 
      content: <p>If you aspire to become a netball coach in Nigeria, the Nigerian Netball Federation offers the Advancing Capacity Excellence (A.C.E.) program, which focuses on developing coaches, umpires (referees), and development officials. The NNF conducts regular workshop sessions under this program where you can receive training and upgrade your coaching skills. By participating in these workshops, you can gain the necessary knowledge and expertise to coach netball teams at various levels, including the national teams or local club teams. To find out more, read up on <Link className="text-green-600 underline" to="/bnn"> our strategy </Link > , or <Link className="text-green-600 underline" to="/getinvolved"> get involved. </Link> </p>
    },
    { id: 3,
      title :   "How do I make a fund deposit to my wallet?", 
    content : <p>To register a netball team in Nigeria, you can <Link className="text-green-600 underline" to="/contact" >contact us </Link>  for guidance and support. The NNF oversees netball and netball-adjacent activities on behalf of Nigeria and can provide you with the necessary information and requirements for team registration. You may need to submit details about your team's name, location, and contact information to complete the registration process. Being part of the NNF's league or tournaments can also help you get your team recognized and be part of the national netball ecosystem. To find out more, read up on  <Link className="text-green-600 underline" to="/bnn"> our strategy </Link > </p>
    },
    {
      id: 4,
      title :   "How do I  make withdrawals?", 
      content: <p>If you are interested in sponsoring any of our netball programmes, you can <Link className="text-green-600 underline" to="/contact"> get in touch with us </Link>  to explore partnership opportunities. The NNF is actively involved in various social impact initiatives, talent development programs, and netball-related events that offer sponsorship opportunities. By collaborating with the NNF, you can contribute to empowering young Nigerian girls, promoting netball, and making a positive impact on the community. The NNF will provide details about available programs and how your sponsorship can support their initiatives. To find out more, read up <Link className="text-green-600 underline" to="/bnn"> our strategy </Link > </p>
    },
    {
      id: 5,
      title :   "Is it possible to update my withdrawal bank account?", 
      content: <p>If you are interested in sponsoring any of our netball programmes, you can <Link className="text-green-600 underline" to="/contact"> get in touch with us </Link>  to explore partnership opportunities. The NNF is actively involved in various social impact initiatives, talent development programs, and netball-related events that offer sponsorship opportunities. By collaborating with the NNF, you can contribute to empowering young Nigerian girls, promoting netball, and making a positive impact on the community. The NNF will provide details about available programs and how your sponsorship can support their initiatives. To find out more, read up <Link className="text-green-600 underline" to="/bnn"> our strategy </Link > </p>
    },
  ]

  const faqs = [generalfaq, giftfaq, cryptofaq, reffaq]


  return (
    <div>
     <div className='faq' >
      <div  className=' faqContainer '>
      <div className=''>
        <h1 className='head'>How can we help you today?</h1>
      </div>
      <div className=' faqCategory'>
        <div className='faqOption' >
        {menuItems.map((item, index) => (
        <div
          key={index}
          onClick={() => setSelected(index)}
          className={`faqSection ${
            selected === index ? 'faqSelect' : ' '
          }`}
        >
          {item}
        </div>
      ))}
    </div>
        </div>
        </div>
   
<div className='faqContainerII '>
        {faqs[selected].map((faq, index ) =>(
          <div   key={index} >
           <div className='faqsect'>
            
           <div className=''>
           
           <h1    onClick={() => toggle(faq.id)}  className='faqQuestion'  >
            <span className=''> {faq.title} </span>
            <span className={open === faq.id  ? "open" : "close"}> + </span>
            </h1>
            <div className= "faqBorder"  >
            <p  className= {open === faq.id  ? "faqShow" : "faqNoshow"}>{faq.content}</p>
           </div>
             </div>
           </div>
         
         </div>
         ))}
    </div>
</div>
      
    </div>
  
  )
}

export default Faq