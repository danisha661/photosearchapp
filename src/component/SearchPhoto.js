import React, { useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { createApi } from "unsplash-js";
import Result from "./Result";
import { Button, Form, Input } from "antd";

const {Search} = Input;

const unsplash = createApi({
  accessKey: "lTUlSxqE3qbFalGG7BS0UnbCj2luyDdqCVG59wZHsg0",
});

const SearchPhoto = () => {
  /**
   * => initialState can take a string, an object or an array
   * => useState query: initializer
   * => createApi: calling the api using the access key
   */
  let initialState = "";
  const [query, setQuery] = useState(initialState);
  const [pics, setPics] = useState([]);

  /**
   * This is an asyncFunction triggered on submit button to search for photos
   * we first prevent default
   * we then call the rest api to fetch the result
   *
   */
  const searchPhotos = async (e) => {
    // e.preventDefault();
    unsplash.search
      .getPhotos({
        query: query,
      })
      .then((result) => {
        setPics(result.response.results);
      });
  };

  return (
    <div>
        <div style={{display:'flex', justifyContent:'center', marginBottom:'20px'}}>
        <Form
        name="customized_form_controls"
        layout="inline"
      >
        <Form.Item
          name="search"
        >
        <Search placeholder="Try 'dog' or 'apple'" name="query" onSearch={searchPhotos} enterButton  value={query}
          onChange={(e) => setQuery(e.target.value)}/>

        </Form.Item>
        <Form.Item>
          
        </Form.Item>
      </Form>
        </div>
     
      <Result pics={pics} />
    </div>
  );
};

export default SearchPhoto;
