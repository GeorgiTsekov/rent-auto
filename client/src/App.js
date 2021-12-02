import React from 'react';
import styles from './App.module.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <div>

      <Header />
      <div className={styles['hero-wrap']} style={{ backgroundImage: "url(images/bg_1.jpg)" }}>
        
      </div>
      <Footer />

      {/* <div className={styles['hero-wrap']} style={{ backgroundImage: "url(images/bg_1.jpg)" }}>
        <div className={styles['container']}>
          <div className={styles['overlay']}></div>
          <div className={`${styles['row no-gutters']} ${styles['slider-text']} ${styles['align-items-center']}`}>
            <form action="/#" className={`${styles['request-form']} ${styles['bg-primary']}`}>
              <h2>Make your trip</h2>
              <div className={styles['form-group']}>
                <label htmlFor="" className={styles['label']}>Pick-up location</label>
                <input type="text" className={styles['form-control']} placeholder="City, Airport, Station, etc" />
              </div>
              <div className={styles['form-group']}>
                <label htmlFor="" className={styles['label']}>Drop-off location</label>
                <input type="text" className={styles['form-control']} placeholder="City, Airport, Station, etc" />
              </div>
              <div className={styles['d-flex']}>
                <div className={`${styles['form-group']} ${styles['mr-2']}`}>
                  <label htmlFor="" className={styles['label']}>Pick-up date</label>
                  <input type="text" className={styles['form-control']} id="book_pick_date" placeholder="Date" />
                </div>
                <div className={`${styles['form-group']} ${styles['mr-2']}`}>
                  <label htmlFor="" className={styles['label']}>Drop-off date</label>
                  <input type="text" className={styles['form-control']} id="book_off_date" placeholder="Date" />
                </div>
              </div>
              <div className={styles['form-group']}>
                <input type="submit" value="Rent A Car Now" className={styles['btn btn-secondary py-3 px-4']} />
              </div>
            </form>
          </div>
        </div>
      </div> */}

      {/* <footer className={styles['ftco-footer ftco-bg-dark ftco-section']}>
        <div className={styles['container']}>
          <div className={styles['row mb-5']}>
            <div className={styles['col-md']}>
              <div className={styles['ftco-footer-widget mb-4']}>
                <h2 className={styles['ftco-heading-2']}><a href="/#" className={styles['logo']}>Car<span>book</span></a></h2>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <ul className={styles['ftco-footer-social list-unstyled float-md-left float-lft mt-5']}>
                  <li className={styles['ftco-animate']}><a href="/#"><span className={styles['icon-twitter']}></span></a></li>
                  <li className={styles['ftco-animate']}><a href="/#"><span className={styles['icon-facebook']}></span></a></li>
                  <li className={styles['ftco-animate']}><a href="/#"><span className={styles['icon-instagram']}></span></a></li>
                </ul>
              </div>
            </div>
            <div className={styles['col-md']}>
              <div className={styles['ftco-footer-widget mb-4 ml-md-5']}>
                <h2 className={styles['ftco-heading-2']}>Information</h2>
                <ul className={styles['list-unstyled']}>
                  <li><a href="/#" className={styles['py-2 d-block']}>About</a></li>
                  <li><a href="/#" className={styles['py-2 d-block']}>Services</a></li>
                  <li><a href="/#" className={styles['py-2 d-block']}>Term and Conditions</a></li>
                  <li><a href="/#" className={styles['py-2 d-block']}>Best Price Guarantee</a></li>
                  <li><a href="/#" className={styles['py-2 d-block']}>Privacy &amp; Cookies Policy</a></li>
                </ul>
              </div>
            </div>
            <div className={styles['col-md']}>
              <div className={styles['ftco-footer-widget mb-4']}>
                <h2 className={styles['ftco-heading-2']}>Customer Support</h2>
                <ul className={styles['list-unstyled']}>
                  <li><a href="/#" className={styles['py-2 d-block']}>FAQ</a></li>
                  <li><a href="/#" className={styles['py-2 d-block']}>Payment Option</a></li>
                  <li><a href="/#" className={styles['py-2 d-block']}>Booking Tips</a></li>
                  <li><a href="/#" className={styles['py-2 d-block']}>How it works</a></li>
                  <li><a href="/#" className={styles['py-2 d-block']}>Contact Us</a></li>
                </ul>
              </div>
            </div>
            <div className={styles['col-md']}>
              <div className={styles['ftco-footer-widget mb-4']}>
                <h2 className={styles['ftco-heading-2']}>Have a Questions?</h2>
                <div className={styles['block-23 mb-3']}>
                  <ul>
                    <li><span className={styles['icon icon-map-marker']}></span><span className={styles['text']}>203 Fake St. Mountain View, San Francisco, California, USA</span></li>
                    <li><a href="/#"><span className={styles['icon icon-phone']}></span><span className={styles['text']}>+2 392 3929 210</span></a></li>
                    <li><a href="/#"><span className={styles['icon icon-envelope']}></span><span className={styles['text']}>info@yourdomain.com</span></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer> */}
    </div>
  );
}

export default App;
