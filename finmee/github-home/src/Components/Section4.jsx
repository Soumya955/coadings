import React from "react";

export default function Section4() {
  return (
    <>
      <div className="feature-card">
        <h3>
          <span className="white-text">GitHub Issues and GitHub Projects</span>{" "}
          supply
          <br />
          flexible project management tools that
          <br /> adapt to your team alongside your code.
        </h3>
        <h2>Explore GitHub Issues </h2>
      </div>
      <div className="feature-card">
        <h3>
          <span className="pink-text">Supercharge collaboration.</span>
          <br /> GitHub helps your teams work more efficiently together.
        </h3>
      </div>

      <div class="table-container">
        <img
          style={{ width: "90vw" }}
          src="https://github.githubassets.com/assets/issues-plan-2-46d1ce1d4519.png?width=1498&format=webpll"
          alt="img"
        />
      </div>

      <div className="feature-card">
        <h3>
          <span className="pink-text">80%.</span>
          <br /> reduction in onboarding time with GitHub2.
        </h3>
      </div>
      <div className="mid-img">
        <img
          src="https://github.githubassets.com/assets/illu-discussions-2-b915a6dd867e.png?width=724&format=webpll"
          alt=""
        />
        <img
          src="https://github.githubassets.com/assets/illu-pull-requests-2-280cc958fc05.png?width=724&format=webpll"
          alt=""
        />
      </div>

      <div>
        <div className="over-million-developers1">
          <h2>
            Over 100 million developers call <br />
            Github home
          </h2>
          <p>
            Whether you’re scaling your startup or just learning how to code,
            GitHub is
            <br /> your home. Join the world’s largest developer platform to
            build the <br />
            innovations that empower humanity. Let’s build from here.
          </p>
        </div>
        <div className="over-million-developers2">
          <button>Sign Up for Github</button>
          <button>Start a free enterprise trial</button>
        </div>
      </div>
      <div style={{width:"40%",margin:"auto"}} className="sponcer">
        <h1 style={{ color: "white" }}>
          Over 100 million developers call GitHub home3
        </h1>
        <br />
        <br />
        <p style={{color:"white"}}>
          Whether you’re scaling your startup or just learning how to code,
          GitHub is your home. Join the world’s largest developer platform to
          build the innovations that empower humanity. Let’s build from here.
        </p>
      </div>

      <div className="last-image">
        <img
          style={{ width: "40vw", margin: "10rem auto" }}
          src="data:image/jpeg;base64,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"
          alt="last-img"
        />
        <p style={{ color: "white", width: "80%", margin: "2rem auto",fontSize:"1.1rem" ,lineHeight:"1.8rem" }}>
          1 This 7X times factor is based on data from the industry’s longest
          running analysis of fix rates Veracode State of Software Security
          2023, which cites the average time to fix 50% of flaws as 198 days vs.
          GitHub’s fix rates of 72% of flaws with in 28 days which is at a
          minimum of 7X faster when compared. 2 The Total Economic Impact™ Of
          GitHub Enterprise Cloud and Advanced Security, a commissioned study
          conducted by Forrester Consulting, 2022. Results are for a composite
          organization based on interviewed customers. 3 There are now 100
          million developers around the world using GitHub. Read the blog post.
        </p>
      </div>
    </>
  );
}
