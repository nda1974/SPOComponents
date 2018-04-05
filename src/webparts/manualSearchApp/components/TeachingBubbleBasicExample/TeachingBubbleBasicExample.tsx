/* tslint:disable:no-unused-variable */
import * as React from 'react';
/* tslint:enable:no-unused-variable */

import { DefaultButton, IButtonProps } from 'office-ui-fabric-react/lib/Button';
import { TeachingBubble } from 'office-ui-fabric-react/lib/TeachingBubble';
import { Link } from 'office-ui-fabric-react/lib/Link';
import { Callout } from 'office-ui-fabric-react/lib/Callout';
import styles from './TeachingBubbleBasicExample.module.scss'
// import { style } from 'glamor';
export interface ITeachingBubbleBasicExampleState {
    isTeachingBubbleVisible?: boolean;
    
}
export interface ITeachingBubbleBasicExampleProps{
  text?:string;
  text2?:string;
  targetUrl:string;
}

export class TeachingBubbleBasicExample extends React.Component<ITeachingBubbleBasicExampleProps,ITeachingBubbleBasicExampleState> {
  private _menuButtonElement: HTMLElement;

  constructor(props: ITeachingBubbleBasicExampleProps,state: ITeachingBubbleBasicExampleState) {
    super(props);

    this._onDismiss = this._onDismiss.bind(this);

    this.state = {
      isTeachingBubbleVisible: false,
    };
  }

  public render() {
    let { isTeachingBubbleVisible } = this.state;
    let examplePrimaryButton: IButtonProps = {
      children: 'Åbn vilkår',
      href:this.props.targetUrl,
      target:'_blank'
      
    };
    let exampleSecondaryButtonProps: IButtonProps = {
      children: 'Luk',
      onClick: this._onDismiss
      
    };

    return (
      <div className='ms-TeachingBubbleExample'>
        <span className='ms-TeachingBubbleBasicExample-buttonArea' ref={ (menuButton) => this._menuButtonElement = menuButton! }>
          <DefaultButton
            onClick={ this._onDismiss }
            text={ isTeachingBubbleVisible ? 'Skjul' : 'Vis mere..' }
            
          />
        </span>
        { isTeachingBubbleVisible ? (
          <div className={styles.MyWidth}>
            <TeachingBubble 
              targetElement={ this._menuButtonElement }
              primaryButtonProps={ examplePrimaryButton }
              secondaryButtonProps={ exampleSecondaryButtonProps }
              onDismiss={ this._onDismiss }
              headline='Information omkring det aktuelle vilkår'
            >


                <div><h1>Teaser</h1>
                </div>
                <div>{this.props.text}
                  {/* <Link href='http://dev.office.com/fabric/components/link'>Se afgørelse.</Link> */}
                </div>
                
                
              
                <h1>Info</h1>                
                <div>{this.props.text2}
                
                  {/* <Link href='http://dev.office.com/fabric/components/link'>Se afgørelse.</Link> */}
                </div>
            </TeachingBubble>
          </div>
        ) : (null) }
      </div>
    );
  }

  private _onDismiss(ev: any) {
    this.setState({
      isTeachingBubbleVisible: !this.state.isTeachingBubbleVisible
    });
  }
}