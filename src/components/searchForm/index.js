import React from 'react';
import './searchForm.css';

const SearchForm = () => (
  <div className="search-form">
  <h3 className="search-form_title">Search Flight</h3>
    <form>
      <ul className="search-form_radio-group">
        <li className="search-form_radio-group_btn">
          <input type="radio" id="Oneway" name="gropRadio" checked/>
          <label for="Oneway">Oneway</label>
        </li>
        <li className="search-form_radio-group_btn">
          <input type="radio" id="Roundtrip" name="gropRadio"/>
          <label for="Roundtrip">Roundtrip</label>
        </li>
      </ul>
      <ul className="search-form_input-group">
        <li className="search-form_input-group-select">
          <label for="countryFrom" className="search-form_input-group-select_label">From</label>
          <select id="countryFrom" name="countryFrom" className="search-form_input-group-select_select">
            <option value="australia">Australia</option>
            <option value="canada">Canada</option>
            <option value="usa">USA</option>
          </select>
        </li>
        <li className="search-form_input-group-select">
          <label for="countryTo" className="search-form_input-group-select_label">To</label>
          <select id="countryTo" name="countryTo" className="search-form_input-group-select_select">
            <option value="usa">USA</option>
            <option value="australia">Australia</option>
            <option value="canada">Canada</option>            
          </select>
        </li>
      </ul>
      <ul className="search-form_input-group search-form_input-group-calendar">
        <li className="search-form_input-group-select search-form_input-group-select-calendar">
          <label for="countryFrom" className="search-form_input-group-select_label">Depart</label>
          <input type="text" id="Oneway" name="Oneway" className="search-form_input-group-calendar-input"/>
        </li>
        <li className="search-form_input-group-select search-form_input-group-select-calendar">
          <label for="countryTo" className="search-form_input-group-select_label">Return</label>
          <input type="text" id="Oneway" name="Oneway" className="search-form_input-group-calendar-input"/>
        </li>
      </ul>
      <ul className="search-form_input-group-count ">
        <li className="search-form_input-group-count_count">
          <label for="Adults" className="search-form_input-group-select_label">Adults</label>
          <select id="Adults" name="Adults" className="search-form_input-group-count_select">
            <option value="3">3</option>
            <option value="2">2</option>
            <option value="1">1</option>
          </select>
        </li>
        <li className="search-form_input-group-count_count">
          <label for="Childrens" className="search-form_input-group-select_label">Childrens</label>
          <select id="Childrens" name="Childrens" className="search-form_input-group-count_select">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>            
          </select>
        </li>
        <li className="search-form_input-group-count_count">
          <label for="Infant" className="search-form_input-group-select_label">Infant</label>
          <select id="Infant" name="Infant" className="search-form_input-group-count_select">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>            
          </select>
        </li>
      </ul>
      <button className="search-form_submit-btn">Find Flight</button>
    </form>
  </div>
);

export default SearchForm;