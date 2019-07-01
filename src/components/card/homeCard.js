import React from 'react';
import Grid from '@material-ui/core/Grid';
import Slider from "react-slick";
import Icon from '@material-ui/core/Icon';
import { Link } from "react-router-dom";
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Tilt from 'react-tilt'
import config from '../../config';


class WraperView extends React.Component {
    render(){
        if (this.props.div){
            return (
                <div className={this.props.className}>
                    {this.props.children}
                </div>
            )
        }else{
            return (
                <Tilt className={this.props.className} options={this.props.options}>
                    {this.props.children}
                </Tilt>
            )
        }
    }
}


export default function HomeCard() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('xm'));
    return (
        <WraperView className="home-card-container" options={{ max: 15, scale: 1.05 }} div={matches ? true :  false}>
            <Grid container spacing={0} direction={matches ? "column" : "row"} className="home-card-container-grid">
                <Grid item xs={12} sm={6} md={5} className="home-card-left-item">
                    <HomeImageCard />
                </Grid>
                <Grid item xs={12} sm={6} md={7} className="home-card-right-item">
                    <HomeCardContent />
                </Grid>
            </Grid>
        </WraperView>
    )
}

class HomeImageCard extends React.Component {
    render() {
        return (
            <div className="home-card-image">
                <div className="content-inner">
                    <h1>Titus Joyson<span>Professional Software Developer</span></h1>
                    <div>
                        <Link to={"/about"} className="link link-light">Like to Know more</Link>
                    </div>
                </div>
            </div>
        )
    }
}

class HomeCardContent extends React.Component {
    constructor() {
        super()
        this.data = [
            {
                "title": "Freeman Dyson",
                "quote": "When I’m working on a problem, I never think about beauty. I think only how to solve the problem. But when I have finished, if the solution is not beautiful, I know it is wrong."
            },
            {
                "title": "John F. Woods",
                "quote": "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live."
            },
            {
                "title": "Steve McConnell",
                "quote": "It’s OK to figure out murder mysteries, but you shouldn’t need to figure out code. You should be able to read it."
            }
        ]
    }

    _renderCard = (data) => {
        return (
            <div className="home-card-slider-item">
                <blockquote>
                    <h1>{data.title}</h1>
                    <p>{data.quote}</p>
                    <span className="quote">
                        <Icon>format_quote</Icon>
                    </span>
                </blockquote>
            </div>
        )
    }

    render() {
        var settings = {
            dots: false,
            infinite: true,
            speed: 800,
            slidesToShow: 1,
            slidesToScroll: 1,
            totalSlides: this.data.length,
            arrows: false,
            autoplay: true
        };
        return (
            <div className="home-card-slider bgDark fullHeight">
                <Slider {...settings}>
                    {this.data.map(this._renderCard)}
                </Slider>
            </div>
        )
    }
}