import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material'
import { ExpandMore } from '@mui/icons-material'
import '../css/bio.css' 
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Aos from "aos"
import 'aos/dist/aos.css'
import { useEffect } from "react"

const Biography = () => {
  const navigate=useNavigate();
  const [expanded,SetExpanded]=useState(false)
  const handleChange=(isExpanded,panel)=>{
    SetExpanded(isExpanded ? panel:false)
  }
  useEffect(()=>{
    Aos.init()
  })
  return (
    <>
    <section className="bio-section">
    <div className="bio-left">
      <img className='bio-tony' src="tony02.jpg" alt="" />
     </div>
     <div className="bio-right" data-aos="flip-down" data-aos-duration="1000">
     <Accordion expanded={expanded==='panel1'} onChange={(e,isExpanded)=>handleChange(isExpanded,'panel1')}>
        <AccordionSummary id='panel1-header' aria-controls='panel1-content' expandIcon={<ExpandMore/>}>
          <Typography>Early life</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Tony stark, born 1970 in Manhattan, inherited Stark industries at 21 after his parents' mysterious death in 1991. A brilliant child prodigy, he graduated from MIT at 17. Stark gained fame as a playboy CEO, known for his weapon designs.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded==='panel2'} onChange={(e,isExpanded)=>handleChange(isExpanded,'panel2')}>
        <AccordionSummary id='panel2-header' aria-controls='panel2-content' expandIcon={<ExpandMore/>}>
          <Typography>Becoming Iron Man</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>In 2010, Stark's demo in Afghanistan goes awry; he's ambushed, wounded, and imprisoned by the Ten Rings. With Yinsen's help, Stark builds an arc reactor and armor, escapes, and vows to stop weapon production. Confronting Stane triumphs, replaces the stolen reactor, defeats Stane, and publicly declares himself as Iron Man at press conference.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded==='panel3'} onChange={(e,isExpanded)=>handleChange(isExpanded,'panel3')}>
        <AccordionSummary id='panel3-header' aria-controls='panel3-content' expandIcon={<ExpandMore/>}>
          <Typography>The Battle of New York</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>In 2012, the Avengers assemble to thwart Loki's invasion. Stark intercepts a missile, seemingly sacrificing himself, but the Hulk saves him. The team captures Loki, and Thor takes him into custody.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded==='panel4'} onChange={(e,isExpanded)=>handleChange(isExpanded,'panel4')}>
        <AccordionSummary id='panel4-header' aria-controls='panel5-content' expandIcon={<ExpandMore/>}>
          <Typography>Infinity War</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>In 2018, Stark, warned by Banner, joins forces on Titan to stop Thanos. Despite a plan, Thanos overpowers them, severely injured stark. Strange surrenders the Time Stone to spare Stark's life. Thanos completes the Infinity Gauntlet on Earth, causing devastation and leaving Stark stranded on Titan.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded==='panel5'} onChange={(e,isExpanded)=>handleChange(isExpanded,'panel5')}>
        <AccordionSummary id='panel5-header' aria-controls='panel6-content' expandIcon={<ExpandMore/>}>
          <Typography>Time heist and Sacrifice</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>In 2023, Stark retires, raises daughter Morgan with Potts Approached by the Avengers for a time-travel mission, Stark initially refuses but later agrees.They retrive Infinity Stones from the past. In a battle against an alternative Thanos, Stark sacrifices himself using a gauntlet he made.</Typography>
        </AccordionDetails>
      </Accordion>
      <div className='goBack2'>
       <button className='goback02' onClick={()=>navigate(-1)}>Go Back</button>
     </div>
     </div>
    </section>
    </>
  )
}

export default Biography
