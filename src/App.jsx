import React, { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import MatrixRain from './MatrixRain';
import './App.css';

function App() {
  const [showContent, setShowContent] = useState(false);
  const [showBlinkingText, setShowBlinkingText] = useState(false);

  useEffect(() => {
    // Retraso para que el usuario aprecie el fondo primero
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="hacker-container">
      <div className="scanlines"></div>
      <MatrixRain />
      
      <div className="content-wrapper">
        <motion.div 
          className="terminal"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="terminal-header">
            <span className="button red"></span>
            <span className="button yellow"></span>
            <span className="button green"></span>
            <span className="title">root@server:~# ./exploit.sh</span>
          </div>
          <div className="terminal-body">
            {showContent && (
              <TypeAnimation
                sequence={[
                  'Iniciando secuencia de intrusión...',
                  800,
                  'Bypass firewall completado.',
                  800,
                  'Obteniendo privilegios de root...',
                  800,
                  'Acceso concedido.',
                  1000,
                  'SISTEMA COMPROMETIDO.',
                  1000,
                  'HAS SIDO HACKEADO POR LOS ALUMNOS DEL COLEGIO AMERICANO.',
                  () => {
                    setShowBlinkingText(true);
                  },
                ]}
                wrapper="div"
                cursor={true}
                speed={50}
                style={{ 
                  whiteSpace: 'pre-line', 
                  display: 'block', 
                  color: '#00FF00', 
                  textShadow: '0 0 5px #00FF00',
                  fontWeight: 'bold'
                }}
                repeat={0}
              />
            )}
            
            {showBlinkingText && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                style={{
                  marginTop: '2rem',
                  color: '#FF0000',
                  textShadow: '0 0 10px #FF0000',
                  fontWeight: 'bold',
                  textAlign: 'center',
                  fontSize: '1.5rem'
                }}
              >
                [ ACCESO DENEGADO A ADMINISTRADORES ]
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default App;
