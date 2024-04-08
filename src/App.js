import React, { useState, useRef, useEffect } from "react";
import { SceneManager } from "gzweb";

function SceneManagerComponent() {
  const [wsUrl, setWsUrl] = useState("ws://localhost:9002");
  const [authKey, setAuthKey] = useState("");
  const sceneManagerRef = useRef(null);

  useEffect(() => {
    connect();
  }, []);

  const connect = () => {
    sceneManagerRef.current = new SceneManager({
      websocketUrl: wsUrl,
      websocketKey: authKey,
      elementId: "container",
    });
  };

  const disconnect = () => {
    if (sceneManagerRef.current) {
      sceneManagerRef.current.disconnect();
    }
  };

  const resize = () => {
    if (sceneManagerRef.current) {
      sceneManagerRef.current.resize();
    }
  };

  const fog = () => {
    sceneManagerRef.current.scene.addFog(0xffffff, 0.05, true);
  };

  const snapshot = () => {
    sceneManagerRef.current.snapshot();
  };

  const resetView = () => {
    sceneManagerRef.current.resetView();
  };

  // Ensure disconnect on unmount
  useEffect(() => {
    return () => disconnect();
  }, []);

  return (
    <div id="container" style={{ height: "100vh" }}>
      {/* Add your JSX here */}
    </div>
  );
}

export default SceneManagerComponent;
