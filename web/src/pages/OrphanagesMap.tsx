import React from 'react';
import mapMarketImg from '../images/map-market.svg';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import '../styles/pages/orphanages-map.css';


function OrphanagesMap() {
  return (
      <div id="page-map">
          <aside>
              <header>
                <img src={mapMarketImg} alt="Happy"/>
                <h2>Escolha um organato no mapa</h2>
                <p>Muitas crianças estão esperando a sua visita :)</p>
              </header>

              <footer>
                  <strong>Rio de Janeiro</strong>
                  <span>Volta Redonda</span>
              </footer>
          </aside>

          <Map 
            center={[-22.5565846,-44.0675008]}
            zoom={15}
            style={{ width: '100%', height: '100%' }}
            >
              <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          </Map>

        <Link to="" className="create-orphanage">
            <FiPlus size={32} color="#FFF" />
        </Link>
      </div>
  );
}

export default OrphanagesMap;
