import React from 'react'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'
import vector1 from "../Images/Vector-1.svg"
import vector2 from "../Images/Vector-2.svg"
import Rectangle5 from "../Images/Rectangle-5.svg"
import rightArrow from "../Images/rightArrow.svg"
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <>
        <Navbar/>
        {/* ------first card----- */}
        <div className='body-parent-1'>
          <div className='body-child-1-1'>
            <div>WELCOME TO CREATIVE PROXIES</div>
            <div>We are the <span style={{color:"#077BFF"}}>Fastest</span> and the <span style={{color:"#16D113"}}>Most Reliable</span> Proxy Service since 2020</div>
          </div>
          <div className='body-child-1-2'>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus augue sit amet mollis molestie.</div>
            <div ><Link to={"/dashboard"}  style={{textDecoration:"none"}}><button className='body-child-1-2-btn'>Get Started <span  className='body-child-1-2-btn-icon' ><img src={rightArrow} alt="" /></span></button></Link></div>
            <div></div>
            <div>
              <div className='star-div-container'>
              <div className='star-div'><img className='star' src={vector1} alt="svgg" /></div>
              <div className='star-div'><img className='star' src={vector1} alt="svgg" /></div>
              <div className='star-div'><img className='star' src={vector1} alt="svgg" /></div>
              <div className='star-div'><img className='star' src={vector1} alt="svgg" /></div>
              <div className='star-div1'><img className='star' src={vector1} alt="svgg" /></div>
              </div>
              <div className='Rectangle-2-2nd-div'>
              <div> Rated 4.5 on</div>
              <div> <img className='star2' src={vector2} alt="svgg" /></div>
              <div> Trustpilot</div>
              </div>
            </div>
          </div>
        </div>
        <div className='line-2'></div>
        <div  id='body-parent-2'>
              <div> <div><img src={Rectangle5}  /></div><div>Lorem Ipsum Dolor Sit Amet Top</div></div>
              <div> <div><img src={Rectangle5}  /></div><div>Lorem Ipsum Dolor Sit Amet Top</div></div>
              <div> <div><img src={Rectangle5} /></div><div>Lorem Ipsum Dolor Sit Amet Top</div></div>
              <div> <div><img src={Rectangle5}  /></div><div>Lorem Ipsum Dolor Sit Amet Top</div></div>
             
        </div>
        {/* --------- */}
        <div id="bluecontainer">
        <div id="bluecontainer1">
            <h1>Why we are the Best Proxy Provider</h1>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem accusamus .</h2>
        </div>
        <div id="bluecontainer2">
            <div>
                <img src="https://imgs.search.brave.com/vI1304ZL2SONebrY8UW2MHejwuMVIy5KXzd-7tJ1Trw/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvNS9Qcm9m/aWxlLnBuZw" alt=""/>
                <h2>Feature No 1</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam itaque fuga voluptatem.</p>
            </div>
            <div>
                <img src="https://imgs.search.brave.com/TOXRKZYtOeo7TUVDFtzAtVgFUlZwQPWCrHkktz_Nm6o/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9wbHVz/cG5nLmNvbS9pbWct/cG5nL3Jlc3RhcnQt/cG5nLW9wZW4tMjAw/MC5wbmc" alt=""/>
                <h2>Feature No 2</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam itaque fuga voluptatem.</p>
            </div>
            <div>
                <img src="https://imgs.search.brave.com/ADJXHIMzsfOC4-W2LhhU4L8XXv2657Hx1AkjeEGxxgE/rs:fit:1200:1200:1/g:ce/aHR0cDovL3d3dy5w/aG90b3MtcHVibGlj/LWRvbWFpbi5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMTEv/MDMvc3VuLWluLWJs/dWUtc2t5LmpwZw" alt=""/>
                <h2>Feature No 3</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam itaque fuga voluptatem.</p>
            </div>
            <div>
                <img src="https://imgs.search.brave.com/IJX54VDJJzGN6drFvNWi54hUgJ5mRa8Laci4owMuHrU/rs:fit:1200:1200:1/g:ce/aHR0cDovLzMuYnAu/YmxvZ3Nwb3QuY29t/L19jV2N1Sk05UUlH/NC9TN0tjLWV2dHdr/SS9BQUFBQUFBQUFR/dy9EdWkwa3JiYXdX/NC9zMTYwMC9jaGF0/dGluZyUyQmNoYXQr/cm9vbSUyQmZyZWUr/bGl2ZStjaGF0dGlu/ZyUyQmNoYXR0aW5n/K3dpdGgraG90K2dp/cmxzJTJCY2hhdCty/b29tczEuanBn" alt=""/>
                <h2>Feature No 4</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam itaque fuga voluptatem.</p>
            </div>
            <div>
                <img src="https://imgs.search.brave.com/IJX54VDJJzGN6drFvNWi54hUgJ5mRa8Laci4owMuHrU/rs:fit:1200:1200:1/g:ce/aHR0cDovLzMuYnAu/YmxvZ3Nwb3QuY29t/L19jV2N1Sk05UUlH/NC9TN0tjLWV2dHdr/SS9BQUFBQUFBQUFR/dy9EdWkwa3JiYXdX/NC9zMTYwMC9jaGF0/dGluZyUyQmNoYXQr/cm9vbSUyQmZyZWUr/bGl2ZStjaGF0dGlu/ZyUyQmNoYXR0aW5n/K3dpdGgraG90K2dp/cmxzJTJCY2hhdCty/b29tczEuanBn" alt=""/>
                <h2>Feature No 5</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam itaque fuga voluptatem.</p>
            </div>
            <div>
                <img src="https://imgs.search.brave.com/rDUUeixouBtVHVj4q12hj-OH08PNqDIwgEK4q5AJ9h0/rs:fit:940:980:1/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvOC9TZWN1/cml0eS1TYWZlLVNo/aWVsZC5wbmc" alt=""/>
                <h2>Feature No 6</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam itaque fuga voluptatem.</p>
            </div>
            <div>
                <img src="https://imgs.search.brave.com/gBJhN668j4zmkMjMNI_HHTwfLEdF_HJql_yPUV-jlmw/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/NnY4Y3FoN2xrbHUw/MS5qcGc_YXV0bz13/ZWJwJnM9YmNhMTE5/NjI5YzI2NWVhODVl/M2Q0NDcxN2FiZjgy/ZDU0M2I2NDViZQ" alt=""/>
                <h2>Feature No 7</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam itaque fuga voluptatem.</p>
            </div>
            <div>
                <img src="https://imgs.search.brave.com/J5PM42rxxmsHtu7FH7x-lMMBHoTHXBDwcO_oGSx_SWM/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9jbGlw/YXJ0c3B1Yi5jb20v/aW1hZ2VzL3RodW5k/ZXItY2xpcGFydC1s/aWdodG5pbmctc3lt/Ym9sLTYucG5n" alt=""/>
                <h2>Feature No 8</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam itaque fuga voluptatem.</p>
            </div>
        </div>
    </div>
    <div id="proxycontainer">
        <div id="proxycontainer1">
            <h1>You choose, We<span> Deliver!</span></h1>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem hello.</h2>
        </div>
        <div id="proxycontainer2">
            <div>
                <div id="proxy1">
                    <div>
                        <button>⌄4</button>
                        <h3>IPv4 Proxies</h3>
                        <p>Static/Routing</p>
                    </div>
                    <div>
                        <h3>FROM</h3>
                        <h3><span>$4.75</span>/day</h3>
                        <h3>OR</h3>
                        <h3><span>$116.75</span>/mo</h3>
                    </div>
                </div>
                <div id="proxy2">
                    <p>Plan Includes :</p>
                    <h3>&#x2713; 100 Threads</h3>
                    <h3>&#x2713; Dedicated IP Pool</h3>
                    <h3>&#x2713; Residental Proxy</h3>
                    <h3>&#x2713; Unlimited Bandwidth</h3>
                    <h3>&#x2713; Worldwide Locations</h3>
                    <h3>&#x2713; 40 GBps</h3>
                </div>
                <button>View Pricing &#x2192;</button>
            </div>
            <div>
                <div id="proxy3">
                    <div>
                        <button>⌄6</button>
                        <h3>IPv6 Proxies</h3>
                        <p>Static/Routing</p>
                    </div>
                    <div>
                        <h3>FROM</h3>
                        <h3><span>$4.75</span>/day</h3>
                        <h3>OR</h3>
                        <h3><span>$116.75</span>/mo</h3>
                    </div>
                </div>
                <div id="proxy4">
                    <p>Plan Includes :</p>
                    <h3>&#x2713; 100 Threads</h3>
                    <h3>&#x2713; Dedicated IP Pool</h3>
                    <h3>&#x2713; Residental Proxy</h3>
                    <h3>&#x2713; Unlimited Bandwidth</h3>
                    <h3>&#x2713; Worldwide Locations</h3>
                    <h3>&#x2713; Dedicated Subnets</h3>
                    <h3>&#x2713; 1 Octillion IPS</h3>
                    <h3>&#x2713; Septiltion per Location</h3>
                </div>
                <button>View Pricing &#x2192;</button>
            </div>
        </div>
    </div>
    <div id="customercontainer">
        <div id="customercontainer1">
            <h1>Customers <span>Love</span> our Proxies</h1>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem hello.</h2>
        </div>
        <div id="customercontainer2">
            <div>
                <img src="https://imgs.search.brave.com/ZXH1N9xz4M6QKZzMTrB4cfu9P21f_is5CX2ABOvC0AI/rs:fit:767:280:1/g:ce/aHR0cHM6Ly9pbWFn/ZS5zaHV0dGVyc3Rv/Y2suY29tL2ltYWdl/LXZlY3Rvci9yZXRy/by1ncmVlbi1maXZl/LXN0YXItcHJvZHVj/dC0yNjBudy0yNjIw/NzYxMzUuanBn" alt=""/>
                <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam itaque fuga voluptatem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt iste enim ab unde odio cumque dolor assumenda voluptas dignissimos illo!"</p>
                <div id="customerprofile">
                    <img src="https://imgs.search.brave.com/ODZ_sZ564SLa3S1KALZzH7KzaPKOpd614BS5zNUadpg/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2ZkL2Zi/LzIxL2ZkZmIyMTNl/ZTU3MjMwMmQ1MGZh/NWJiMzM1MGU1MTQw/LmpwZw" alt=""/>
                    <div>
                        <h2>ECHO DJNS</h2>
                        <p>Web Designer, CreativeProxies</p>
                    </div>
                </div>
            </div>
            <div>
                <img src="https://imgs.search.brave.com/ZXH1N9xz4M6QKZzMTrB4cfu9P21f_is5CX2ABOvC0AI/rs:fit:767:280:1/g:ce/aHR0cHM6Ly9pbWFn/ZS5zaHV0dGVyc3Rv/Y2suY29tL2ltYWdl/LXZlY3Rvci9yZXRy/by1ncmVlbi1maXZl/LXN0YXItcHJvZHVj/dC0yNjBudy0yNjIw/NzYxMzUuanBn" alt=""/>
                <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam itaque fuga voluptatem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi odio necessitatibus dolorum dolor, voluptates quis veritatis corporis perferendis at officia?"</p>
                <div id="customerprofile">
                    <img src="https://imgs.search.brave.com/ODZ_sZ564SLa3S1KALZzH7KzaPKOpd614BS5zNUadpg/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2ZkL2Zi/LzIxL2ZkZmIyMTNl/ZTU3MjMwMmQ1MGZh/NWJiMzM1MGU1MTQw/LmpwZw" alt=""/>
                    <div>
                        <h2>John Doe</h2>
                        <p>Random Text, ABC</p>
                    </div>
                </div>
            </div>
            <div>
                <img src="https://imgs.search.brave.com/ZXH1N9xz4M6QKZzMTrB4cfu9P21f_is5CX2ABOvC0AI/rs:fit:767:280:1/g:ce/aHR0cHM6Ly9pbWFn/ZS5zaHV0dGVyc3Rv/Y2suY29tL2ltYWdl/LXZlY3Rvci9yZXRy/by1ncmVlbi1maXZl/LXN0YXItcHJvZHVj/dC0yNjBudy0yNjIw/NzYxMzUuanBn" alt=""/>
                <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam itaque fuga voluptatem. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati itaque nemo deleniti voluptas dolorum, laboriosam nisi mollitia vero ratione ea."</p>
                <div id="customerprofile">
                    <img src="https://imgs.search.brave.com/ODZ_sZ564SLa3S1KALZzH7KzaPKOpd614BS5zNUadpg/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2ZkL2Zi/LzIxL2ZkZmIyMTNl/ZTU3MjMwMmQ1MGZh/NWJiMzM1MGU1MTQw/LmpwZw" alt=""/>
                    <div>
                        <h2>John Doe</h2>
                        <p>Random Text, ABC</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="blogcontainer">
        <div id="blogcontainer1">
            <h1>Read Our <span>Exclusive</span> Blog</h1>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem hello.</h2>
            <h3><span>&nbsp; Read All Blogs &#129058;</span></h3>
        </div>
        <div id="blogcontainer2">
            <div>
                <div></div>
                <h2>Blog Title appear here</h2>
                <p>Category name here</p>
            </div>
            <div>
                <div></div>
                <h2>Blog Title appear here</h2>
                <p>Category name here</p>
            </div>
            <div>
                <div></div>
                <h2>Blog Title appear here</h2>
                <p>Category name here</p>
            </div>
            <div>
                <div></div>
                <h2>Blog Title appear here</h2>
                <p>Category name here</p>
            </div>
            <div>
                <div></div>
                <h2>Blog Title appear here</h2>
                <p>Category name here</p>
            </div>
            <div>
                <div></div>
                <h2>Blog Title appear here</h2>
                <p>Category name here</p>
            </div>
        </div>
    </div>
        <Footer/>
    </>
  )
}

export default Home
