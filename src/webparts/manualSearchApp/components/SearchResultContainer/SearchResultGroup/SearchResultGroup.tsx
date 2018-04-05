import * as React from "react";
import * as ReactDom from 'react-dom';
  import { Link } from 'office-ui-fabric-react/lib/Link';
  import { BaseComponent } from 'office-ui-fabric-react/lib/Utilities';
import { PrimaryButton, DefaultButton, IButtonProps } from 'office-ui-fabric-react/lib/Button';
import { MessageBar, MessageBarType } from 'office-ui-fabric-react/lib/MessageBar';

  import { DetailsList, buildColumns, IColumn } from 'office-ui-fabric-react/lib/DetailsList';
  import { DirectionalHint } from 'office-ui-fabric-react/lib/common/DirectionalHint';
  import { autobind } from 'office-ui-fabric-react/lib/Utilities';
import { ISearchResultGroupProps } from "./ISearchResultGroupProps";
import { ISearchResultGroupState } from "./ISearchResultGroupState";
import styles from "./SearchResultGroup.module.scss";
import {TeachingBubbleBasicExample} from '../../TeachingBubbleBasicExample/TeachingBubbleBasicExample'
import {ITeachingBubbleBasicExampleState}from '../../TeachingBubbleBasicExample/TeachingBubbleBasicExample'



export default class SearchResultGroup extends React.Component<ISearchResultGroupProps, ISearchResultGroupState> {
    
    public constructor(props:ISearchResultGroupProps, state:ISearchResultGroupState){  
            super(props);  
        this.state={show:true}
            this.updateState = this.updateState.bind(this);
            
    }
    updateState() {
        if  (this.state.show == true){
            this.setState({show: false})
        }
        else{
            this.setState({show: true})
        }
        
     }

    public render(): React.ReactElement<ISearchResultGroupProps> {  
        const group = this.props.manuals;      
        const showCompactMode = true;  
        return(<div >
            <div onClick = {this.updateState} className= {styles.GroupBar}>{this.props.groupName.length>0?this.props.groupName:'Uden kategori'}<i className={this.state.show==true? "ms-Icon ms-Icon--ChevronUp":"ms-Icon ms-Icon--ChevronDown"} aria-hidden="true"></i></div>
            
            <div className= {this.state.show==true? styles.Show:styles.Hide}>
            
            
            
                {(() => {
                    if(group.length>1){
                        group.sort((a,b)=>a.Title.localeCompare(b.Title))
                    }        
                })()}
                
                
                {/* {  group.sort((a,b)=>a.Title.localeCompare(b.Title)) }                  */}
            
            
                
                
            {
            
                
            Object.keys(group).map((manual)=>{
                return <div className={styles.ManualRow}>
                            {
                                this.props.displayCompactMode==true?
                                <Link href={group[manual].Path}>{group[manual].Title}</Link>:
                                <div>
                                <h4>{group[manual].Title}</h4>
                                <div>{group[manual].LBInfo}</div>
                                <div>{group[manual].LBTeaser}</div>
                                <p>Integer non dignissim diam. Suspendisse sed imperdiet lectus. Etiam facilisis interdum risus vel varius. Integer quis felis mauris. Nam sed efficitur arcu. Proin ut cursus orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam tristique justo id pharetra euismod. Nam eu vehicula dui. Donec sed lectus ut est molestie varius eu sit amet metus. Donec a aliquam felis. Nullam id rhoncus ex, nec finibus est. Proin eu tempor metus, eu faucibus risus. Nullam interdum nisl a felis luctus, in dapibus lorem luctus.</p>
                                {/* <TeachingBubbleBasicExample  text='Aenean id eros ut ante ultricies malesuada a vel erat. Donec a molestie nisl, non blandit enim. Mauris sit amet urna nisl. Nulla facilisi. Nullam laoreet auctor neque, sed vestibulum mi porta nec. Sed id augue a est commodo luctus non sit amet arcu. Vestibulum congue risus at mauris pharetra, eu fringilla arcu tincidunt. Aenean sed magna vitae sapien ultricies varius. Duis turpis dui, laoreet ac purus dictum, ornare aliquet tellus. Nulla eu sodales justo. Mauris sodales mauris quis justo tincidunt, eget dignissim risus venenatis.'    /> */}
                                {
                                    
                                    group[manual].LBTeaser!=null && group[manual].LBInfo!=null?
                                        group[manual].LBTeaser.length>0 && group[manual].LBInfo.length>0?
                                            <TeachingBubbleBasicExample targetUrl={group[manual].OriginalPath}  text={group[manual].LBTeaser} text2={group[manual].LBInfo}    />:null
                                            :null
                                }
                                
                                </div>

                            }
                        </div>
            })
            }  
            </div>
            </div>)
    }}
      
    
