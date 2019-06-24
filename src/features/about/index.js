import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Slider from "react-slick";
import Icon from '@material-ui/core/Icon';
import Hidden from '@material-ui/core/Hidden';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ParticleView from '../../components/particle';
import context from './content';


const useStyles = makeStyles({
    container: {
        display: "flex",
        flexGrow: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        height: "inherit",
    }
});

export default function About() {
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('lg'));
    const extClassName = !matches?"about-card-slider-sm":"about-card-slider-lg"
    return (
        <Container
            maxWidth="lg"
            className={classes.container}
            style={{ padding: 0 }}
        >
            <Grid container spacing={0} direction={matches ? "column" : "row"} className="fullHeight">
                <Grid xs={12} sm={12} md={12} className="grid-center">
                    <TopDownMainCard extClassName={extClassName} sm={!matches}/>
                </Grid>
                {
                    matches? (
                        <Grid xs={12} sm={12} md={12} className="grid-center">
                            <PixalCard extClassName={extClassName}/>
                        </Grid>
                    ) : null
                }
            </Grid>
        </Container>
    )
}


class PixalCard extends React.Component {
    render(){
        const extClassName = this.props.extClassName;
        return (
            <div className={"bgBlack about-card-slider "+extClassName}>
                <ParticleView />
            </div>
        )
    }
}


class TopDownMainCard extends React.Component {
    constructor() {
        super()
        this.data = [
            {
                "title": "About Me",
                "quote": context.aboutMe,
            },
            {
                "title": "Get In Touch",
                "quote": context.getInTouch
            }
        ]
    }

    _renderCard = (data) => {
        let containerClass = "about-card-slider-item";
        if(this.props.sm == true){
            containerClass += " about-card-slider-item-sm"
        }
        return (
            <div className={containerClass}>
                <blockquote>
                    <h2>{data.title}</h2>
                    <p>{data.quote}</p>
                </blockquote>
            </div>
        )
    }

    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            totalSlides: this.data.length,
            arrows: false,
            autoplay: false,
            vertical: false
        };
        const extClassName = this.props.extClassName;
        return (
            <div className={"bgBlack about-card-slider "+extClassName}>
                <Slider {...settings}>
                    {this.data.map(this._renderCard)}
                </Slider>
            </div>
        )
    }
}