import React = require('react');

import { ComponentBase } from 'resub';

import RX = require('reactxp');


export interface CommonProps {
    ref?: string | ((obj: React.Component<any, any>) => void);
    key?: string | number;
    type?: any;
    children?: React.ReactNode | React.ReactNode[];
}

interface Props extends RX.Types.CommonProps {
   a?: string;
   b: string;
}

export class Test<P extends Props> extends ComponentBase<P, {}> {

    constructor(props: P) {
        super(props);
    }

    test() {
        if (this.props.a) {
            this.print(this.props.a);
        }   
        if (this.props.b) {
            this.print(this.props.b);
        }
        
    }

    print(s: string) {
        console.log(s);
    }
}
