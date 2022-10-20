import React from "react";
import { MainStyle, SectionStyle } from "./styled";
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function App() {
  return (
    <div>
      <header>
        <h1>Tabuada do 1 ao 10</h1>
      </header>
      <MainStyle>
        <SectionStyle>
          {arr.map((item) => {
            return (
              <p>
                {arr[0]} x {item} = {item * arr[0]}
              </p>
            );
          })}
        </SectionStyle>
        <SectionStyle>
          {arr.map((item) => {
            return (
              <p>
                {arr[1]} x {item} = {item * arr[1]}
              </p>
            );
          })}
        </SectionStyle>
        <SectionStyle>
          {arr.map((item) => {
            return (
              <p>
                {arr[2]} x {item} = {item * arr[2]}
              </p>
            );
          })}
        </SectionStyle>
        <SectionStyle>
          {arr.map((item) => {
            return (
              <p>
                {arr[3]} x {item} = {item * arr[3]}
              </p>
            );
          })}
        </SectionStyle>
        <SectionStyle>
          {arr.map((item) => {
            return (
              <p>
                {arr[4]} x {item} = {item * arr[4]}
              </p>
            );
          })}
        </SectionStyle>
        <SectionStyle>
          {arr.map((item) => {
            return (
              <p>
                {arr[5]} x {item} = {item * arr[5]}
              </p>
            );
          })}
        </SectionStyle>
        <SectionStyle>
          {arr.map((item) => {
            return (
              <p>
                {arr[6]} x {item} = {item * arr[6]}
              </p>
            );
          })}
        </SectionStyle>
        <SectionStyle>
          {arr.map((item) => {
            return (
              <p>
                {arr[7]} x {item} = {item * arr[7]}
              </p>
            );
          })}
        </SectionStyle>
        <SectionStyle>
          {arr.map((item) => {
            return (
              <p>
                {arr[8]} x {item} = {item * arr[8]}
              </p>
            );
          })}
        </SectionStyle>
        <SectionStyle>
          {arr.map((item) => {
            return (
              <p>
                {arr[9]} x {item} = {item * arr[9]}
              </p>
            );
          })}
        </SectionStyle>
      </MainStyle>
    </div>
  );
}
