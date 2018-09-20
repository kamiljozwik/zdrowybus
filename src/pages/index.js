import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Logo from '../img/Logo.png';
import LandingLayout from '../components/landingLayout'

export default class IndexPage extends React.Component {
    render() {
        return (
            <LandingLayout>
            <section className="landing">
                <div className="landing-left">
                    <div className="landing__left-panel panel">
                        <img alt="logo" src={Logo} className="landing__left-panel--logo" />
                        <div className="landing__left-panel--enter"><Link to="/main">ENTER</Link></div>
                    </div>
                </div>
                <div className="landing-right">
                    <div className="landing__right-panel panel">
                        <div className="landing__right-panel--logo">
                            <span>ZdrowyBus BLOG</span>
                        </div>
                        <div className="landing__right-panel--enter">coming soon...</div>
                    </div>
                </div>
            </section>
            </LandingLayout>
        );
    }
}

IndexPage.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            edges: PropTypes.array,
        }),
    }),
};

