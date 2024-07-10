import './Experience.css'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Experience() {
    return(
        <>
        <Accordion id='accordian'>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="accordianheader"
          >
            <div>UBC Thunderbots</div>
            <div className='date'>Sept. 2023 - Current</div>
          </AccordionSummary>
          <AccordionDetails id="accordianbody">
          <h4>Software Programmer </h4>
            <p>Coordinates and collaborates with various sub-teams and team members to design autonomous soccer robots for RoboCup competitions. 
                As part of the Software Technical Team, Implements software in charge of determining robot AI and behaviour in C++ and Python.           
                </p>
            <ul>
                <li>Overhauled free-kick defensive behaviour using a new finite state machine-driven approach resulting in dynamic on-field robot assignments and increased defensive flexibility.</li>
                <li>Implemented diagnostic module between onboard systems and control interfaces to measure and display connection latencies via round-trip time to monitor network status on the field.</li>
                <li>Designed and developed visualization overlay within robot gameplay simulation/control interface using PyQt to display robot previous positions to analyze and debug motion-based behaviours.</li>
            </ul>
          </AccordionDetails>
        </Accordion>
        <Accordion id='accordian'>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="accordianheader"
          >
            <div>UBC DMCBH</div>
            <div className='date'>Jun. 2023 - Jul. 2023</div>
          </AccordionSummary>
          <AccordionDetails id="accordianbody">
          <h4>Neurology Laboratory Assistant</h4>
            <p>A member of Djavad Mowafaghian Centre for Brain Health (DMCBH) in Cashman Labs, assisting experiments and research relating to neurodegenerative diseases such as ALS and protein misfolding.
                </p>
            <ul>
                <li>Prepared lab materials and solutions (e.g. Pipette tips, glass slides or TBS, blocking buffers, etc.) required for frozen sectioning of nerve tissue</li>
                <li>Sterilized and cleaned lab equipment post-experimentation through autoclaving or other antiseptic techniques</li>
                <li>Facilitated lab upkeep through chemical inventory checks, waste disposal, refilling carboys, and managing incoming samples for specialized storage</li>
                <li>Collated, cross-referenced, and digitalized data from research samples for lab records</li>
            </ul>
          </AccordionDetails>
        </Accordion>
        <Accordion id='accordian'>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="accordianheader"
          >
            <div>HMS Engineering Club</div>
            <div className='date'>Jun. 2020 - Jun. 2023 </div>
          </AccordionSummary>
          <AccordionDetails id="accordianbody">
          <h4>Hugh McRoberts Secondary Engineering Club President</h4>
            <ul>
                <li>Directed club operations and leadership across three years resulting in club growth from 40 to 100 members.</li>
                <li>Manufactured custom PCB kits to teach C++, robotics, and embedded systems to high school students.</li>
                <li>Co-founded district-wide STEM initiative consisting of over 120 members in collaboration with the University of Victoria, Kwantlen Polytechnic University, and Simon Fraser University to promote education accessibility. </li>
            </ul>
          </AccordionDetails>
        </Accordion>
      </>
    )
}