/**
 * 主界面组件
 * @author yangyunlong
 */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
//import './main.css';
//import routes from './routes';
//import { Button } from 'antd';

class Main extends Component{
    constructor(props) {
        super(props);
        this.state = {view:'index',params:null};
        this.toggleView = this.toggleView.bind(this);
    }

    toggleView(view,params) {this.setState({view:view,params:params});}

    render() {
        let state = this.state;
        const View = routes[state.view];
        return (
            <div className='main-container'>
                <Header/>
                <Menus toggleView={this.toggleView}/>
                <View params={state.params} toggleView={this.toggleView}/>
            </div>
        );
    }
}
class Header extends Component{
    constructor(props) {super(props);}
    render() {
        return (<div className='main-header'><Button type="primary">Primary</Button></div>);
    }
}

class Menus extends Component{
    constructor(props) {super(props);}
    render() {
        let props = this.props;
        return (
            <div className='main-menus'>
                <div className='main-sidebar'>
                    <div onClick={() => props.toggleView('index',{id:'111',name:'index'})}>index</div>
                    <div onClick={() => props.toggleView('text',{id:'222',name:'text'})}>text</div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Main/>,document.getElementById('root'));