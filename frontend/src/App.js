import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Main from './Main';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';

const App = () => {
  const [formOverlay, setFormOverlay] = useState(false);

  const handleFormOverlay = e => {
    e.preventDefault();
    const { o_o, formxclose } = e.target.dataset;
    if (Number(o_o) || Number(formxclose)) setFormOverlay(st => !st);
  };

  const closeFormOverlay = () => setFormOverlay(false);

  return (
    <BrowserRouter>
      <Header handleFormOverlay={handleFormOverlay} />
      <Main />
      <Footer />
      {formOverlay && (
        <ContactForm
          formOverlay={formOverlay}
          handleFormOverlay={handleFormOverlay}
          closeFormOverlay={closeFormOverlay}
        />
      )}
    </BrowserRouter>
  );
};

export default App;

/**
 * ICONS
 * dps
 * <i class="fas fa-bahai"></i>
 *
 * cooldown
 * <i class="fas fa-sync-alt"></i>
 * <i class="far fa-clock"></i>
 *
 * resource
 * <i class="fas fa-bong"></i>
 *
 * range
 * <i class="fas fa-bullseye"></i>
 *
 * grade
 * <i class="fas fa-life-ring"></i>
 *
 * artifact power
 * <i class="fas fa-circle-notch"></i>
 *
 * usage
 * <i class="fab fa-superpowers"></i>
 *
 * type
 * <i class="fas fa-compress"></i>
 *
 * cc
 * <i class="fab fa-creative-commons"></i>
 *
 * discord
 * <i class="fab fa-discord"></i>
 *
 * aoe
 * <i class="fab fa-hornbill"></i>
 *
 * dmgtype
 * <i class="fab fa-digital-ocean"></i>
 *
 * give copyright
 * <a href="https://icons8.com/icon/yYT2bg6jaBu2/chain">Chain icon by Icons8</a>
 *
 * https://iconmonstr.com/arrow-15-svg/
 *
 * https://blog.naver.com/it_design/220488645447
 */
