import * as React from 'react';
import styles from './ForKendo.module.scss';
import { IForKendoProps } from './IForKendoProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { AutoComplete, ComboBox, DropDownList, MultiSelect } from '@progress/kendo-react-dropdowns';

import '@progress/kendo-theme-default/dist/all.css';

export default class ForKendo extends React.Component<IForKendoProps, {}> {
  sports = [
    { text: 'Basketball', id: 1 },
    { text: 'Football', id: 2 },
    { text: 'Tennis', id: 3 },
    { text: 'Volleyball', id: 4 }
];
state = {
    value: { text: 'Football', id: 2 }
};
handleChange = (event) => {
  this.setState({
      value: event.target.value
  });
}
  public render(): React.ReactElement<IForKendoProps> {
    return (
      <div className={ styles.forKendo }>
    <div className="example-config">
                    Selected Value: {JSON.stringify(this.state.value)}
                </div>
                <DropDownList
                    data={this.sports}
                    textField="text"
                    dataItemKey="id"
                    value={this.state.value}
                    onChange={this.handleChange}
                />
      </div>
    );
  }
}
