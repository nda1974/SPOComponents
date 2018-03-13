import * as React from 'react';
import { escape } from '@microsoft/sp-lodash-subset';
import WebPartContext from '@microsoft/sp-webpart-base/lib/core/WebPartContext';



export interface IAppProps {
    manualType: string;
    webPartContext:WebPartContext;
  }

  export interface IAppState {
    refinementFilters: string;
    queryText: string;
  }
  
export default class App extends React.Component<IAppProps, IAppState> {
  public render(): React.ReactElement<IAppProps> {


    let ss: SPSearchService=new SPSearchService(this.props.webPartContext)
            
                

    let searchResult:Promise<ISearchResults>=ss.search(this.state.queryText,this.state.refinementFilters,this.props.manualType);
            


    return (
      <div>
          {this.props.manualType}
      </div>
    );
  }
}
