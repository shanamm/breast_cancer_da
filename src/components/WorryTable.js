import React, { Component } from 'react';
import { numArray } from '../helpers/utilities.js';
import worry_content from '../helpers/worry_content.json';

class WorryTable extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      activeButton: "" 
    }
  }

  handleChange(e) {
    this.props.onScaleSelect(e.target.name, e.target.id);
  }


  render() {
    const nums = numArray("5").slice(1);
		const labels = worry_content.labels;
		const worries = worry_content.body;
    return (
      <table className="table table-bordered table-responsive-sm">
        <thead className="thead-light">
          <tr>
						{ labels.map( (label, i) => {
							return (
								<th key={i} scope="col">{ label }</th>
							);
						})}
          </tr>
        </thead>
        <tbody>
          { worries.map( (worry, i) => {
            return (
              <tr key={i}>
                <td>{ worry.content }</td>
                { nums.map( (num, j) => {
                  return (
                    <td key={j}>
                      <div className="form-check">
                        <input 
                          className="form-check-input"
                          type="radio"
                          name={ worry.type }
                          key={j}
                          id={num}
                          onChange={ this.handleChange }
                        />
                        <label className="form-check-label">{num}</label>
                      </div>
                    </td>
                  )
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
export default WorryTable;
