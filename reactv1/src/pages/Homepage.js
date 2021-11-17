import React from 'react';
import AkitaLogo from "../images/akitalogo.webp";
import AkitaInuSmall from "../images/Akita-Inu.webp";
import AkitaInuMain from "../images/Akita-INU-Token.webp";
import AlgorandWalletMain from "../images/algorand-wallet-01.webp";
import AlgoDark from "../images/algo-dark.webp";
import NFT1 from "../images/nft1.webp";
import NFT2 from "../images/nft2.webp";
import NFT3 from "../images/nft3.webp";
import NFT4 from "../images/nft4.webp";
import NFT5 from "../images/nft5.webp";
import NFT6 from "../images/nft6.webp";
import NFT7 from "../images/nft7.webp";
import NFT8 from "../images/nft8.webp";

export const NavBar = ()=>(<nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
    <div className="container">
        <a className="navbar-brand" href="#">
            <img src={AkitaLogo} alt="" width="60"/> Akita Inu ASA
        </a>
        <button className="navbar-toggler rounded-4 shadow-sm border-light border purpleGradient" type="button"
                data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto me-0 mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#ecosystem">Ecosystem</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#timeline">Timeline</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#nfts">NFTs</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#community">Community</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#charity">Charity</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" aria-current="page"
                       href="https://app.tinyman.org/#/swap?asset_in=0&asset_out=384303832">Purchase</a>
                </li>
            </ul>
            <div className="d-flex">
                <a href="https://tinychart.org/asset/384303832" className="btn rounded-pill btn-success"
                   id="price">Loading...</a>
                <a href="https://app.tinyman.org/#/swap?asset_in=0&asset_out=384303832"
                   className="btn btn-dark purpleGradient rounded-pill mx-auto ms-lg-2 d-block d-lg-inline mt-2 mb-4 m-md-0">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="exchange-alt" role="img"
                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="d-inline-block"
                         width="18">
                        <path fill="currentColor"
                              d="M0 168v-16c0-13.255 10.745-24 24-24h360V80c0-21.367 25.899-32.042 40.971-16.971l80 80c9.372 9.373 9.372 24.569 0 33.941l-80 80C409.956 271.982 384 261.456 384 240v-48H24c-13.255 0-24-10.745-24-24zm488 152H128v-48c0-21.314-25.862-32.08-40.971-16.971l-80 80c-9.372 9.373-9.372 24.569 0 33.941l80 80C102.057 463.997 128 453.437 128 432v-48h360c13.255 0 24-10.745 24-24v-16c0-13.255-10.745-24-24-24z"
                              className=""></path>
                    </svg>
                    Swap on TinyMan</a>
            </div>
        </div>
    </div>
</nav>);
export const HeroContent =()=>(<div className="py-5 purpleGradient text-white">
    <div className="container">
        <div className="row align-items-center">
            <div className="col-12 col-md-5 offset-md-1">
                <div className="px-4 px-md-0">
                    <h2 className="mb-4">AKITA INU TOKEN is the premier decentralized community ASA on the Algorand
                        Blockchain.</h2>
                    <p clas="mb-4">1 Billion AKITA were created on inception. More details of how AKITA is
                        distributed can be found below.</p>
                    <a href="https://app.tinyman.org/#/swap?asset_in=0&asset_out=384303832"
                       className="btn btn-light btn-lg rounded-pill"><img src={AkitaInuSmall} className="img-fluid"
                                                                          width="40"/> &nbsp;&nbsp; Buy Akita Inu
                        now&nbsp;&nbsp;</a>
                </div>
            </div>
            <div className="col-12 col-md-5">
                <img src={AkitaInuMain} className="img-fluid d-block mx-auto"/>
            </div>
        </div>
    </div>
</div>);
export const AlgorandContent =()=>(<div className="py-5 border-top border-dark bg-dark text-white">
    <div className="container">
        <div className="row align-items-center">
            <div className="col-12 col-md-5 offset-md-1">
                <img src={AlgorandWalletMain} className="img-fluid d-block mx-auto" width="350"/>
            </div>
            <div className="col-12 col-md-5">
                <div className="px-4">
                    <h2 className="mb-4">Why Algorand</h2>
                    <p>Send money to anyone, anywhere, anytime with transaction finality under 4.5 seconds.</p>
                    <p>Transaction fees are a fraction of a cent or 0.001 Algo.</p>
                    <p>Algo was built for billions of users, so payments won’t slow down no matter how much traffic
                        there is.</p>
                    <p>Algo doesn’t fork and uses the most advanced cryptography around. This protects any ASAs or
                        NFTs from being copied.</p>
                    <p className="mb-4">Like AKITA the total supply of Algo was created at the launch of the
                        Algorand blockchain. Anyone can see how many Algo, or AKITA are in use.</p>
                    <a href="https://www.algorand.com" target="_blank"
                       className="btn btn-dark btn-lg purpleGradient rounded-pill"><img src={AlgoDark}
                                                                                        className="img-fluid"
                                                                                        width="40"/> &nbsp;&nbsp; Learn
                        more &nbsp;&nbsp;</a>
                </div>
            </div>
        </div>
    </div>
</div>);
export const Ecosystem =()=>(<div className="py-6 border-top" id="ecosystem">
    <div className="container">
        <h2 className="mb-5 text-center"><span
            className="mx-auto d-inline-block rounded-pill bg-white border p-4 mb-0 shadow text-dark">Ecosystem</span>
        </h2>
        <div className="row row-eq-height text-white">
            <div className="col-12 col-md-5 offset-md-1">
                <div className="bg-dark p-4 rounded-4">
                    <h4>AKITA INU TOKEN<br/><small className="text-white-50">ASA ID#384303832</small></h4>
                    <ul>
                        <li>1 Billion AKITA INU Created</li>
                        <li>350,000,000 Added to Tinyman Liquidity Pool (35%)</li>
                        <li>250,000,000 AKITA Airdropped through request on Oct 31st, 2021 (25%)</li>
                        <li>50,000,000 AKITA reserved for the creator with a Minimum 1 year lock up period (5%)</li>
                        <li>200,000,000 AKITA reserved for the AKITA community project (20%)</li>
                        <li>150,000,000 AKITA reserved for future Airdrops and Community Awareness (15%)</li>
                    </ul>
                </div>
            </div>
            <div className="col-12 col-md-5">
                <div className="bg-dark p-4 rounded-4 mt-4 mt-md-0">
                    <h4>Official AKITA NFT<br/><small className="text-white-50">ASA ID#388950186</small></h4>
                    <ul>
                        <li>We Created 10,000 AKITA LOGO NFTs for Airdrops! These LOGO NFTs are perfect avatars to
                            help spread awareness!
                        </li>
                        <li>10,000 AKITA NFTs Created</li>
                        <li>10,000 AKITA NFTs for Airdrops (100%)</li>
                    </ul>
                </div>
                <div className="text-center mt-4">
                    <a href="https://app.tinyman.org/#/swap?asset_in=0&asset_out=384303832"
                       className="btn btn-outline-dark btn-lg rounded-pill"><img src={AkitaInuSmall}
                                                                                 className="img-fluid"
                                                                                 width="40"/> &nbsp;&nbsp; Buy Akita
                        Inu now&nbsp;&nbsp;</a>
                </div>
            </div>
        </div>
    </div>
</div>);
export const Timeline =()=>(<div className="purpleGradient py-6 text-white position-relative" id="timeline">
    <h2 className="mb-5 text-center"><span
        className="mx-auto d-inline-block rounded-pill bg-white border p-4 mb-0 shadow text-dark">Timeline</span>
    </h2>
    <div className="container small-width">
        <div className="row text-white-50">
            <div className="col-8 col-md-6 pb-5">
                <div className="rounded-3 bg-dark p-4 done">
                    <h4 className="semi-bold">AKITA INU Created</h4>
                    1 Billion AKITA INU TOKEN ASA were created
                </div>
            </div>
            <div className="col border-left-dotted">
                <div className="p-2 d-inline-block bg-light text-dark rounded text-start">
                    26<sup>th</sup> Oct<br/><strong>2021</strong>
                </div>
            </div>
        </div>
        <div className="row text-white-50">
            <div className="col text-end">
                <div className="p-2 d-inline-block bg-light text-dark rounded text-start">
                    29<sup>th</sup> Oct<br/><strong>2021</strong>
                </div>
            </div>
            <div className="col-8 col-md-6 pb-5 border-left-dotted">
                <div className="rounded-3 bg-dark p-4 done">
                    <h4 className="semi-bold">LOGO and NFT Created</h4>
                    The official logo and 10,000 logo NFTs were created
                </div>
            </div>
        </div>
        <div className="row text-white-50">

            <div className="col-8 col-md-6 pb-5">
                <div className="rounded-3 bg-dark p-4 done">
                    <h4 className="semi-bold">Free Air Drop</h4>
                    Fill out the google form by 16:00 PST for a free Airdrop! ENDED
                </div>
            </div>
            <div className="col border-left-dotted">
                <div className="p-2 d-inline-block bg-light text-dark rounded text-start">
                    29<sup>th</sup> Oct<br/><strong>2021</strong>
                </div>
            </div>
        </div>
        <div className="row text-white-50">
            <div className="col text-end">
                <div className="p-2 d-inline-block bg-light text-dark rounded text-start">
                    12<sup>th</sup> Nov<br/><strong>2021</strong>
                </div>
            </div>
            <div className="col-8 col-md-6 pb-5 border-left-dotted">
                <div className="rounded-3 bg-dark p-4 done">
                    <h4 className="semi-bold">Site Launch</h4>
                    Our Site is live with community project details!
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-8 col-md-6 pb-5">
                <div className="rounded-3 bg-dark p-4">
                    <h4 className="semi-bold">Final Air Drop!</h4>
                    Check out out twitter and sign up to the final free AirDrop!
                </div>
            </div>
            <div className="col border-left-dotted last">
                <div className="p-2 d-inline-block bg-light text-dark rounded text-start">
                    13<sup>th</sup> Nov<br/><strong>2021</strong>
                </div>
            </div>
        </div>
    </div>
</div>);
export const NFTContent=()=>(<div className="bg-dark position-relative" id="nfts">
    <div
        className="position-absolute mt-5 top-0 start-50 translate-middle-x rounded-pill bg-white border p-4 h2 mb-0 shadow text-dark">NFT's
    </div>
    <div className="row g-0">
        <div className="col-3">
            <img src={NFT1} className="img-fluid"/>
        </div>
        <div className="col-3">
            <img src={NFT2} className="img-fluid"/>
        </div>
        <div className="col-3">
            <img src={NFT3} className="img-fluid"/>
        </div>
        <div className="col-3">
            <img src={NFT4} className="img-fluid"/>
        </div>
        <div className="col-3">
            <img src={NFT5} className="img-fluid"/>
        </div>
        <div className="col-3">
            <img src={NFT6} className="img-fluid"/>
        </div>
        <div className="col-3">
            <img src={NFT7} className="img-fluid"/>
        </div>
        <div className="col-3">
            <img src={NFT8} className="img-fluid"/>
        </div>
    </div>
</div>);
export const Footer=()=>(<><div className="bg-dark py-6 text-white" id="community">
    <div className="container small-width">
        <div className="px-4">
            <h2 className="mb-5 text-center"><span
                className="mx-auto d-inline-block rounded-pill bg-white border p-4 mb-0 shadow text-dark">Community</span>
            </h2>
            <h2 className="mb-4">Monthly AKITA NFT Collab</h2>
            <p>There are 2 things we love almost as much as dogs. The Algo Community and NFTs! Our first community
                project will be a Monthly NFT Project! Each month community members can submit an NFT they created
                for review. We will choose 1 winner each month. The Selected artist each month will receive
                1,000,000 AKITA, 10 Algo and be spotlighted on our Site and Social Media! Additionally, a 1 of 1 NFT
                will be created and sold to the highest bidder. All proceeds will go to the Artist!</p>
            <p className="mb-4">To Enter: Send your Drawings to akitacommunityproject@gmail.com We will contact the
                winner directly through the email you submit. Winners will be announced on the last Sunday of each
                month. The first winner will be announced on November 28th.</p>
            <h4 className="m-0">Additional Community Projects Coming Soon!</h4>
            <div className="text-center mt-5">
                <a href="https://reddit.com/r/AkitaInuASA/"
                   className="my-3 btn btn-dark purpleGradient rounded-pill btn-lg px-4 mx-2" target="_blank"><i
                    className="fab fa-reddit-alien"></i> Reddit</a>
                <a href="https://twitter.com/AkitaInuASA"
                   className="my-3 btn btn-dark purpleGradient rounded-pill btn-lg px-4 mx-2" target="_blank"><i
                    className="fab fa-twitter"></i> Twitter</a>
                <a href="https://discord.gg/SmMuHws8nT"
                   className="my-3 btn btn-dark purpleGradient rounded-pill btn-lg px-4 mx-2" target="_blank"><i
                    className="fab fa-discord"></i> Discord</a>
                <a href="https://www.instagram.com/akitainutoken/"
                   className="my-3 btn btn-dark purpleGradient rounded-pill btn-lg px-4 mx-2" target="_blank"><i
                    className="fab fa-instagram"></i> Instagram</a>
            </div>
        </div>
    </div>
</div>
    <div className="py-6" id="charity">
        <div className="container">
            <h2 className="mb-5 text-center"><span
                className="mx-auto d-inline-block rounded-pill bg-white border p-4 mb-0 shadow text-dark">Charity</span>
            </h2>
        </div>
    </div>
    <div className="py-6 border-top">
        <div className="container text-center">
            <a href="https://app.tinyman.org/#/swap?asset_in=0&asset_out=384303832" target="_blank"
               className="btn btn-dark btn-sm mx-2">Swap on TinyMan</a> <a href="#" target="_blank"
                                                                           className="btn btn-dark btn-sm mx-2">Algorand
            Foundation</a><br/>
            <p className="pt-5 mb-0">&copy; 2021 Akita Inu ASA</p>
        </div>
    </div></>);
export const HomePage = () =>(
<div className="App">
    <NavBar />
    <HeroContent />
    <AlgorandContent />
    <Ecosystem />
    <Timeline />
    <NFTContent />
    <Footer/>
</div>);