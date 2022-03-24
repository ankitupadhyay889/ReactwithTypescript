import React, { useState } from 'react';
import { Demo } from './Demo';

const Modell = () => {

    const [shwMo, setshwMo] = useState<boolean>(false);

    return (
        {shwMo && (
            <Demo>
              <div
                style={{
                  display: "grid",
                  placeItems: "center",
                  height: "100vh",
                  width: "100vh",
                  background: "rgba(0,0,0,0.1)",
                  zIndex: 99,
                }}
              >
                I'm a modal!{" "}
                <button
                  style={{ background: "papyawhip" }}
                  onClick={() => setshwMo(false)}
                >
                  close
                </button>
              </div>
            </Demo>
        )}
    );
};

export default Modell;