import metascraper from 'metascraper';
import metascraperDescription from 'metascraper-description';
import metascraperImage from 'metascraper-image';
import metascraperLogo from 'metascraper-logo-favicon';
import metascraperTitle from 'metascraper-title';
import metascraperUrl from 'metascraper-url';

const getMeta = async (url) => {
  const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`);
  const responseObj = await response.json();
  const html = responseObj.contents;

  const metadata = await metascraper([
    metascraperDescription(),
    metascraperImage(),
    metascraperLogo(),
    metascraperTitle(),
    metascraperUrl(),
  ])({ html, url });

  return metadata;
};

export default getMeta;
