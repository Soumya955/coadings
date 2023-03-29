import React from 'react'

const Navbar = () => {
  return (
    <div id="nav">
            <div>
            <div id="logo">
                <img src="https://imgs.search.brave.com/J3e-tJ_f8PdMQU3b2V5_CEXMqivQ1NER7bH0zvYUJRA/rs:fit:1000:1000:1/g:ce/aHR0cHM6Ly9jcmVh/dGl2ZXByb3hpZXMu/Y29tL2Fzc2V0cy9p/bWcvbG9nby5zdmc_/Mg.svg" alt=""/>
                <h2><b> CreativeProxies</b></h2>
            </div>
            <div id="navMid">
                <p>Pricing</p>
                <p>Explore Tools v</p>
                <p>Resources v</p>
                <p>FAQs</p>
                <p>Blogs</p>
            </div>
            </div>
            <div>
                <div id="discord">
                    <img src="https://imgs.search.brave.com/X5osh53BWk_TAgQ_8g8KbCCWEFjaPgCbB_0ou6itvSk/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9sb2dv/ZG93bmxvYWQub3Jn/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE3/LzExL2Rpc2NvcmQt/bG9nby0yLTEucG5n" alt=""/>
                    <p>Join Discord</p>
                </div>
                <button>Log in</button>
                <a href="/dashboard"><button id="getStart">Get Started</button></a>
            </div>
        </div>
  )
}

export default Navbar
