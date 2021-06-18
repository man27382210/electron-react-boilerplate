import React, { useRef, useLayoutEffect, memo, useState } from 'react';
import Div from './components/Div';
import LoadingDots from './components/LoadingDot';
import Main from './components/Main';

const Mail = () => {
  const webViewRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useLayoutEffect(() => {
    if (!loaded && webViewRef.current) {
      webViewRef.current.innerHTML = `<webview src='https://mail.google.com/mail/' style='height:100%' nodeIntegration autosize='on'></webview>`;
      setLoaded(true);
    }
  }, [webViewRef, loaded]);
  return (
    <Main>
      {!loaded && <LoadingDots />}
      <Div ref={webViewRef} />
    </Main>
  );
};

export default memo(Mail);
