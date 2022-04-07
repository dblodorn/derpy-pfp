import Head from "../components/head";
import { PageWrapper } from "../styles/components";
import { DeckBuilder } from "../components/deckBuilder";

const nfts = `
  <div style="width: 100%; max-width: 1240px; margin: 0 auto; position: relative;">
    <style>
      .nft-embed-wrapper > iframe {
        width: 100%!important;
        height:100%!important;
        border: 0;
        position: absolute;
        top: 0;
        left: 0;
      }
    </style>
    <div class="nft-embed-wrapper" style="position: relative; width:100%; height:0; padding-bottom: calc(100% + 112px);"><iframe src="https://embed.zora.co/0xfd05b04a0040325C0D975B89F6F3AeB188FB1fBD/18?title=true&controls=false&loop=true&autoplay=true&market=false" width="100%" height="100%" scrolling="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-pointer-lock allow-same-origin allow-scripts allow-popups"></iframe></div>
  </div>
`


export default function Home() {
  
  return (
    <PageWrapper fw={true}>
      <Head />
    </PageWrapper>
  );
}
