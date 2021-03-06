import React from 'react';
import { ImagerDisplay, imagerShow, ImagerImg } from '../imager/index.js';

export const Offer = () => {
  return (
    <div className='text-container'>
      

      <ul className='offer'>
      <h2>Nytt Set Naglar</h2>

      <li><h3>Manikyr (vanliga) </h3> - <span className='price'>250kr</span> </li>
<li><h3>Manikyr med gellack</h3> - <span className='price'>395kr</span> </li>
<li><h3>Nagelförlängning Nytt Set (utan gellack)</h3> - <span className='price'>550kr</span></li>
<li><h3>Nagelförlängning Nytt Set med fransk, ombre eller glitter</h3> - <span className='price'>650kr</span></li>
<li><h3>Nagelförlängning Nytt Set med gellack</h3> - <span className='price'>600kr</span></li>
<li><h3>Nagelförstärkning med gellack</h3> - <span className='price'>500kr</span></li>
<br/>
<h2>Påfyllning Naglar</h2>

<li><h3>Nagelförlängning påfyllning (utan gellack)</h3> - <span className='price'>500kr</span></li>
<li><h3>Nagelförlängning påfyllning med fransk,ombre eller glitter</h3> - <span className='price'>600kr</span></li>
<li><h3>Nagelförlängning påfyllning med gellack</h3> - <span className='price'>550kr</span></li>
<li><h3>Nagelförstärkning med gellack Påfyllning</h3> - <span className='price'>450kr</span></li>
<br/>
<h2>Nytt Set Fransar</h2>

<li><h3>Singelfransar Nytt Set (1:1)</h3> - <span className='price'>500kr</span></li>
<li><h3>Volymfransar Nytt Set (2-3D)</h3> - <span className='price'>600kr</span></li>
<li><h3>Volymfransar Nytt Set (4-6D)</h3> - <span className='price'>700kr</span></li>
<br/>
<h2>Påfyllning Fransar</h2> 

<li><h3>Singelfransar Påfyllning (1:1)</h3> - <span className='price'>450kr</span></li>
<li><h3>Volymfransar Påfyllning (2-3D)</h3> - <span className='price'>550kr</span></li>
<li><h3>Volymfransar Påfyllning (4-6D)</h3> - <span className='price'>650kr</span></li>
<br/>
<h2>Ögonbryn</h2>

<li><h3>Plockning och forming av bryn</h3> - <span className='price'>150kr</span></li>
<li><h3>Henna brow med ögonbrynsgeometri</h3> - <span className='price'>300kr</span></li>
<br/>
<h2>Borttagning</h2>

<li><h3>Borttagning fransar</h3> - <span className='price'>200kr</span></li>
<li><h3>Bortagning gel med vanlig manikyr</h3> - <span className='price'>350kr</span></li>

      </ul>
      {/* <ul className='offer'>
        <li>
          <h3>Manikyr</h3> - <span className='price'>200 kr</span>
        </li>
        <li>
          <h3>Gellack</h3> - <span className='price'>395 kr</span>
        </li>
        <li>
          <h3>Gellack - borttagning</h3> - <span className='price'>200 kr</span>
        </li>
        <li>
          <h3>Nagelförlängning (gelénaglar) Nytt Set</h3> -
          <span className='price'> 550 kr</span>
        </li>
        <li>
          <h3>Nagelförlängning (Påfyllning)</h3> -
          <span className='price'> 495 kr</span>
        </li>
        <li>
          <h3>Borttagning gelénaglar</h3> -{' '}
          <span className='price'>200 kr</span>
        </li>
        <br />
      </ul>
  
      <h2>Fransar</h2>

      <ul className='offer'>
        <li>
          <h3>Nytt Set Singelfransar</h3> -{' '}
          <span className='price'>500 kr</span>
        </li>
        <li>
          <h3>Singelfransar (påfyllning, återbesök)</h3> -{' '}
          <span className='price'>450 kr</span>
        </li>
        <li>
          <h3>Nytt Set Volymfransar</h3> - <span className='price'>570 kr</span>
        </li>
        <li>
          <h3>Volymfransar (påfyllning, återbesök)</h3> -{' '}
          <span className='price'>500 kr</span>
        </li>
        <li>
          <h3>Borttagning fransar</h3> - <span className='price'>300 kr</span>
        </li>
        <br />
        <p>(Jag använder bara syntetiska fransar.)</p>
      </ul> */}
      <br />
      <h2>Lojalitetsprogram</h2>

      <p className='loyal'>
        Om du samlar 6 st stämplar - du får 50% rabat till den sjunde
        behandlingen !
      </p>
      <div className='photo-container'>
        <ImagerDisplay z-index='2000' />
        <div className='card'>
          <ImagerImg
            src={require('../layout/card_front.jpg')}
            alt='Visitkort NailsByEC Framsidan'
          />
        </div>
        <div className='card'>
          <ImagerImg
            src={require('../layout/card_back.jpg')}
            alt='Visitkort NailsByEC Baksidan'
          />
        </div>
      </div>
    </div>
  );
};
