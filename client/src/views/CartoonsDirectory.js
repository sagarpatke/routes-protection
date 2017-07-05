import React from 'react';

import Paper from 'material-ui/Paper';
import {brown200} from 'material-ui/styles/colors';
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHeaderColumn,
  TableRowColumn
} from 'material-ui/Table';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const styles = {
  paperHeading: {
    minHeight: '100px',
    padding: '40px',
    backgroundColor: brown200
  },
  paperBody: {
    padding: '0 40px 0'
  },
  addButton: {
    position: 'relative',
    top: '-28px'
  }
};

export default class CartoonsDirectory extends React.Component {
  render() {
    return (
      <div>
        <Paper style={styles.paperHeading}>
          <h2>Cartoons Directory</h2>
        </Paper>
        <Paper style={styles.paperBody}>
          <FloatingActionButton style={styles.addButton}><ContentAdd /></FloatingActionButton>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHeaderColumn>ID</TableHeaderColumn>
                <TableHeaderColumn>Name</TableHeaderColumn>
                <TableHeaderColumn>Creator</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableRowColumn>1</TableRowColumn>
                <TableRowColumn>Mickey Mouse</TableRowColumn>
                <TableRowColumn>Walt Disney</TableRowColumn>
              </TableRow>
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}
