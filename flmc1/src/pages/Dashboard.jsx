import React from 'react'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'

const Dashboard = () => {
  return (
    <>
        <Navbar/>
    <div class="container">
        <div id="midcontainer">
            <div id="topheadcont">
                <p>PROXY LOCATION CHECKER</p>
                <h1>Check Locations of all your Proxies <span>Free</span> of Costs</h1>
                <h2>To Check location, enter the adress or proxies you want to check (1 IP Per line)</h2>
            </div>
            <div id="box1">
                <p>8.8.8.8</p>
                <p>1.1.1.1</p>
                <p>192.168.1.1</p>
            </div>
            <div id="box2">
                <button>Check Location</button>
                <button >By using our tool, you agree our <u>Terms of Service</u> and <u>Privacy Policy</u></button>
            </div>
            <p id="littleheading">Your Results</p>
            <table id="table1">
                <tr>
                    <th>IP</th>
                    <th>PROXY</th>
                    <th>CITY</th>
                    <th>COUNTRY</th>
                </tr>
                <tr>
                    <td>8.8.8.8</td>
                    <td>192.168.0.0</td>
                    <td>New York</td>
                    <td>US</td>
                </tr>
                <tr>
                    <td>1.1.1.1</td>
                    <td>192.168.0.0</td>
                    <td>Los Angelos</td>
                    <td>US</td>
                </tr>
                <tr>
                    <td>192.168.1.1</td>
                    <td>192.168.0.0</td>
                    <td>San Diego</td>
                    <td>US</td>
                </tr>
            </table>
            <h3 id="littleheading2">Check out our IPv6 Compatibility Checker <span>&nbsp; View Tool &#129058;</span></h3>
        </div>
    </div> 
        <Footer/>
    </>
  )
}

export default Dashboard
