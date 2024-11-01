import './pricing-page.css';

function PricingPage() {
    return (
        <section className="plans_container">
            <div className="plans">
                <div className="plansHero">
                    <h1 >Simple, transparent pricing</h1>
                    <p >No contracts. No suprise fees.</p>
                </div>
                <div className="planItem_container">
                    <div className="planItem">

                        <div className="card">
                            <div className="card_header">
                                <h2>Free</h2>
                            </div>
                            <div className="card_desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do</div>
                        </div>

                        <div className="price">$0<span>/ month</span></div>

                        <ul className="featureList">
                            <li>2 links</li>
                            <li>Own analytics platform</li>
                            <li className="disabled">Chat support</li>
                            <li className="disabled">Mobile application</li>
                            <li className="disabled">Unlimited users</li>
                        </ul>

                        <button className="btn">Get Started</button>
                    </div>

                    <div className="planItem ">
                        <div className="card">
                            <div className="card_header">
                                <h2>Pro</h2>
                                <div className="badge">Best Value</div>
                            </div>
                            <div className="card_desc">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</div>
                        </div>

                        <div className="price">$18<span>/ month</span></div>

                        <ul className="featureList">
                            <li>2 links</li>
                            <li>Own analytics platform</li>
                            <li>Chat support</li>
                            <li className="disabled">Mobile application</li>
                            <li className="disabled">Unlimited users</li>
                            
                        </ul>

                        <button className="btn ">Get Started</button>
                    </div>

                    <div className="planItem">
                        <div className="card">
                            <div className="card_header">
                                <h2>Enterprise</h2>
                            </div>
                            <div className="card_desc">Nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor</div>
                        </div>

                        <div className="price">Let's Talk</div>

                        <ul className="featureList">
                            <li>2 links</li>
                            <li>Own analytics platform</li>
                            <li>Chat support</li>
                            <li>Mobile application</li>
                            <li>Unlimited users</li>
                            <li>Customize Panel</li>
                        </ul>

                        <button className="btn">Get Started</button>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default PricingPage