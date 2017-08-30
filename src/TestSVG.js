/**
 * Created by Administrator on 2017/4/13.
 */
import {createElement, Node} from 'lomo';
import anime from 'animejs';
export default class TestSVG extends Node {
    onCreate(){
        super.onCreate();
        let svg = <svg version="1.1" width="516.3px" height="190px" viewBox="0 0 516.3 190" style="enable-background:new 0 0 516.3 211.99;">
            <path id="template" d="M9.13,99.99c0,0,18.53-41.58,49.91-65.11c30-22.5,65.81-24.88,77.39-24.88c33.87,0,57.55,11.71,77.05,28.47c23.09,19.85,40.33,46.79,61.71,69.77c24.09,25.89,53.44,46.75,102.37,46.75c22.23,0,40.62-2.83,55.84-7.43c27.97-8.45,44.21-22.88,54.78-36.7c14.35-18.75,16.43-36.37,16.43-36.37"></path>
            <path id="path" d="M9.13,99.99c0,0,18.53-41.58,49.91-65.11c30-22.5,65.81-24.88,77.39-24.88c33.87,0,57.55,11.71,77.05,28.47c23.09,19.85,40.33,46.79,61.71,69.77c24.09,25.89,53.44,46.75,102.37,46.75c22.23,0,40.62-2.83,55.84-7.43c27.97-8.45,44.21-22.88,54.78-36.7c14.35-18.75,16.43-36.37,16.43-36.37" style={{visibility: 'visible', strokeDashoffset: -249.55, strokeDasharray: '124.775px, 633.874px'}}></path>
        </svg>;
        this.addChild(svg);
        var pathEls = this.element.querySelectorAll('path');
        for (var i = 0; i < pathEls.length; i++) {
            var pathEl = pathEls[i];
            var offset = anime.setDashoffset(pathEl);
            pathEl.setAttribute('stroke-dashoffset', offset);
            anime({
                targets: pathEl,
                strokeDashoffset: [offset, 0],
                duration: anime.random(1000, 3000),
                delay: anime.random(0, 2000),
                loop: true,
                direction: 'alternate',
                easing: 'easeInOutSine',
                autoplay: true
            });
        }
    }
}
