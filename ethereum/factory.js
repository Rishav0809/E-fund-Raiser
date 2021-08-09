import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x4D69a9c83D19B1b39A0f885D7FD7db6bA794bB22'
);

export default instance;
