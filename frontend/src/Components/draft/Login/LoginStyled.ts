import styled from "styled-components";
import photo from "../../Features/images/h4.jpg";

// export const LoginStyle = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (min-width: 1024px) {
    flex-direction: row-reverse; */
 // }
  // .ImgFrame {
    /* background-image: url(${photo}); */
    // background-color: blue;
    /* overflow: hidden;
    background-size: cover;
    background-position: center;



       background-color: blue;
       min-height: 700px; */

       ////////////////////// this one
       /* background-repeat: no-repeat;
  background-size: cover; */
  /////////////////////////

    /* display: block;
    margin: auto;

    height: auto;
    max-height: 100%;

    width: auto;
    max-width: 100%; */

    /* @media (min-width: 1024px) {
      flex: 1;
    
    } */
//   }
// `;


export const MainForm = styled.div`
  /* background-color: skyblue; */

  margin-top: 40px;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
  background: #FFFFFF;
  border-radius: 8px 8px 0px 0px;
left: calc(50% - 375px/2);
top: calc(50% - 631px/2 + 133px);
  @media (min-width: 1024px) {
    flex: 1;
    min-height: 700px;
  }
`;
////////////////////////////////////////////////////////////

export const PageStyle = styled.div`

  .ImgFrame {
    /* background-image: url(${photo}); */
    background-color: skyblue;
    height: 292px;
  }
  //////////////////////////////////////////
p {
  color: #b3b3b3;
  font-weight: 300; }

a {
  -webkit-transition: .3s all ease;
  -o-transition: .3s all ease;
  transition: .3s all ease; 
  text-decoration: none !important; }
.content {
  padding: 7rem 0; }



.half, .half .container > .row {
  height: 100vh;
  min-height: 700px; }

@media (max-width: 991.98px) {
  .half .bg {
    height: 200px; } }

.half .contents {
  background: #f6f7fc; }

.half .contents, .half .bg {
  width: 50%; }
  @media (max-width: 1199.98px) {
    .half .contents, .half .bg {
      width: 100%; } }
  .half .contents .form-control, .half .bg .form-control {
    border: none;
    -webkit-box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    height: 54px;
    background: #fff; }
    .half .contents .form-control:active, .half .contents .form-control:focus, .half .bg .form-control:active, .half .bg .form-control:focus {
      outline: none;
      -webkit-box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1); }

.half .bg {
  background-size: cover;
  background-position: center; }

.half a {
  color: #888;
  text-decoration: underline; }

.half .btn {
  height: 54px;
  padding-left: 30px;
  padding-right: 30px; }

.half .forgot-pass {
  position: relative;
  top: 2px;
  font-size: 14px; }

.control {
  display: block;
  position: relative;
  padding-left: 30px;
  margin-bottom: 15px;
  cursor: pointer;
  font-size: 14px; }
  .control .caption {
    position: relative;
    top: .2rem;
    color: #888; }

.control input {
  position: absolute;
  z-index: -1;
  opacity: 0; }

.control__indicator {
  position: absolute;
  top: 2px;
  left: 0;
  height: 20px;
  width: 20px;
  background: #e6e6e6;
  border-radius: 4px; }

.control--radio .control__indicator {
  border-radius: 50%; }

.control:hover input ~ .control__indicator,
.control input:focus ~ .control__indicator {
  background: #ccc; }

.control input:checked ~ .control__indicator {
  background: #fb771a; }

.control:hover input:not([disabled]):checked ~ .control__indicator,
.control input:checked:focus ~ .control__indicator {
  background: #fb8633; }

.control input:disabled ~ .control__indicator {
  background: #e6e6e6;
  opacity: 0.9;
  pointer-events: none; }

.control__indicator:after {
  font-family: 'icomoon';
  content: '\e5ca';
  position: absolute;
  display: none;
  font-size: 16px;
  -webkit-transition: .3s all ease;
  -o-transition: .3s all ease;
  transition: .3s all ease; }

.control input:checked ~ .control__indicator:after {
  display: block;
  color: #fff; }

.control--checkbox .control__indicator:after {
  top: 50%;
  left: 50%;
  margin-top: -1px;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%); }

.control--checkbox input:disabled ~ .control__indicator:after {
  border-color: #7b7b7b; }

.control--checkbox input:disabled:checked ~ .control__indicator {
  background-color: #7e0cf5;
  opacity: .2; }


`;