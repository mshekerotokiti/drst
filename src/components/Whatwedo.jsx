import React from 'react'
import {useState} from 'react';
import Navbar from './Navbar';
import './Whatwedo.css';

const Whatwedo = () => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleReadMore = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div>
      <Navbar/>
      <h3>Areas of Work</h3>
      <p className='whatwedo'>
        {showFullText
          ? "By and large, and with urge of adding real value to the community in broader sense, DRS-TANZANIA focuses towards five ultimate sustainable results and through effective service provisions. The first result focus is supporting Persons with Special Needs (PSNs) to avail them individually and within set groups capture improved living status and within their entire livelihood journey. These includes among several interventions, making beneficiaries as individual citizens, understand themselves as responsible creature for their own living."
          : "By and large, and with urge of adding real value to the community in broader sense, DRS-TANZANIA focuses towards five ultimate sustainable results and through effective service provisions. The first result focus is supporting Persons with Special Needs (PSNs) to avail them individually and within set groups capture improved living status and within their entire livelihood journey. These includes among several interventions, making beneficiaries as individual citizens, understand themselves as responsible creature for their own living.The second broad result-based focus is ensuring full inclusive existence and understanding and involvement to all societal engagements. The third but not least broad focus is on triggering prosperity and development advancement through formalized functional groups. Coupled with the above key result-based organizational engagements, the below are also our secondary important result focused aspects. As a forth focus, supporting and facilitating towards strengthening the organizational capacity of active community based organizations (CBOs) dealing to any basket of esteemed beneficiaries is among the Organizational operative platform.Here is and through tailored training initiatives, ensuring existence of effective leadership and good governance practices and applications for the benefit of their beneficiaries they serve. The fifth broad aspect under this operational umbrella is propagating through effective facilitations and sensitization programs to the existence of peace and harmony among beneficiaries as specific groups but also to the entire society they live in. Essence on this is to ensure happy and advantageous living status to all citizens."}
          </p>
 

<ul>
<h4>Social Protection Interventions for People with Special Needs (PWSNs)</h4>
<p className='whatwedo'>The social protection program focuses on providing support to people with special needs and adolescent girls and young women.</p>

<h4>Actions to End Violence Against Women and Children (VAWC)</h4>
<p className='whatwedo'>The goal of this program is to create a safer and more just world for women and children by addressing and ending violence against them.</p>

<h4>Economic Empowerment Related Activities</h4>
<p className='whatwedo'>The economic empowerment program aims to provide people with the opportunities and resources they need to achieve sustainable growth and success.</p>

<h4>Preventing Human Trafficking</h4>
<p className='whatwedo'>The human trafficking prevention program works to protect the vulnerable and ensure their rights are respected</p>

<h4>Improving Health</h4>
<p className='whatwedo'>The health program focuses on improving access to quality healthcare for all.</p>

<h4>Improving Education</h4>
<p className='whatwedo'>The education program aims to transform lives through learning and development.</p>
</ul>

<button onClick={toggleReadMore} className="btn-read-more">
            {showFullText ? 'Read More' : 'Read Less'}
          </button>
    </div>
  )
}

export default Whatwedo
