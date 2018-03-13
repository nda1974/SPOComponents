import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneChoiceGroup
} from '@microsoft/sp-webpart-base';

import * as strings from 'ManualSearchAppWebPartStrings';
// import ManualSearchApp from './components/ManualSearchApp';
// import { IManualSearchAppProps } from './components/IManualSearchAppProps';
import App, { IAppProps } from './components/App/App';

export interface IManualSearchAppWebPartProps {
  description: string;
  manualType: string;
}

export default class ManualSearchAppWebPart extends BaseClientSideWebPart<IManualSearchAppWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IAppProps > = React.createElement(

      App,
      {
        manualType: this.properties.manualType,
        webPartContext:this.context
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
        
          header: {
            
            description: "Vælg typen af håndbøger der skal vises" 
          },
          groups: [
            {
              groupName: 'Håndbog',
              groupFields: [
                PropertyPaneChoiceGroup('manualType',{
                  label:'Vælg type',
                  options:[{ key: 'Baad', text: 'Båd'}, 
                       { key: 'Bil', text: 'Bil' }, 
                       { key: 'Hund', text: 'Hund' } 
                  ]
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
