import { Grid, Container } from "@mantine/core";
import styled from "styled-components";

export const BlogMainSection = styled(Container) `
    padding-top: 50px;
    padding-left: 100px;
    padding-right: 100px;
    @media screen and (max-width: ${({ theme })=> theme.breakPoints.sm}){
        padding-left: 15px;
        padding-right: 16px;
    }
    
    
    .instruction h2 {
        font-size: 50px;
        font-weight: 600;
        @media screen and (max-width: ${({ theme })=> theme.breakPoints.sm}){font-size: 40px;}
    }

    .instruction p {
        color: grey;
        padding-bottom: 10px;
        font-size: 13px;
    }
    .img-section {
        object-fit: cover;
        width: 98%;
        height: auto;
        margin-left: 8px;
    }

    .Mui-selected {
        border-radius: 5px;
        background-color: #3800B0 !important;
        color: white;
        font-weight: bold;
    }
`

export const ButtonSection = styled(Grid) `
    padding-top:30px;
    display: flex;
    padding-bottom: 30px;

    .search-filter {
        display: flex;
    }

    @media screen and (max-width: ${({ theme })=> theme.breakPoints.sm}){
        flex-direction: column-reverse;
        gap: 18px;
        padding-bottom: 50px;
    }
    
    .btn-section {
        width: 44%;
        border: 2px solid rgb(229 228 228);
        border-radius:13px;
        display: flex;
        @media screen and (max-width: ${({ theme })=> theme.breakPoints.sm}){
            width:102%;
        }

        @media (min-width: 769px) and (max-width: 1350px) {
            overflow: scroll;
        }

        @media screen and (min-width: ${({ theme }) => theme.breakPoints.temp}) {
            width: 50%;
            overflow: scroll;
        }

        @media screen and (max-width: ${({ theme }) => theme.breakPoints.temp}) {
            width: 100%;
            overflow: scroll;
        }
        @media (max-width: 500px) {
            overflow: scroll;
        }
    }

    .all-btn {
        border: 2px solid #3800B0;
        color: #3800B0;
        height: 50px;
        border-radius: 10px;
        background: rgb(222 229 255);
        text-transform: capitalize;
    }

    .other-btn-th {
        color: black;
        text-transform: capitalize;
    }

    .other-btn {
        background: white;
        border: none;
        color: black;
        height: 50px;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        margin-left: 25px;
        text-transform: capitalize;
    }

    .input-section{
        .search-icon {
            float: right;
            margin-right: -390px;
            margin-top: -40px;
            color: #3800B0;
            font-size: 25px;
        }

        .filter-icon {
            float: right;
            margin-top: -39px;
            font-size: 23px;
            margin-right: -430px;
        }
        @media screen and (min-width: ${({ theme }) => theme.breakPoints.temp}) {
            width: 50%;

            
        }

        @media screen and (max-width: ${({ theme }) => theme.breakPoints.sm}) {
            .search-icon {
                float: right;
                margin-right: 72px;
                color: #3800B0;
                margin-top: -31px;
                font-size: 25px;
            }

            .filter-icon {
                float: right;
                margin-top: -30px;
                font-size: 23px;
                margin-right: 35px;
            }
        }

        @media screen and (max-width: ${({ theme }) => theme.breakPoints.temp}) {
            width: 100%;
            margin-top: 20px;
        }

        

    }

    .inp-sect {
        width: 235%;
        padding: 8px;
        margin-left: 30px;

        @media screen and (max-width: ${({ theme })=> theme.breakPoints.sm}){
            margin-left:0px;
            width: 70%; 
            padding: 0px;

        }
        .search-icon {
            float: right;
            color: #3800B0;
            font-size: 30px;
            margin-left:370px;
            margin-top: 10px;
        }

        .filter-icon {
            float: right;
            font-size: 27px;
            margin-left:30px;
            margin-top: 10px;
        }
    }

`

export const CardTopSection = styled(Container) `
    background: #0B0023;
    border-radius: 20px;
    padding: 0px !important;


    .read-section h2 {
        font-size: 45px;
        color: white;
        font-weight: 600;
    }

    .txt {
        font-size: 16px;
        color: #EBE5F7;
        padding-top: 10px;
    }

    .top-txt {
        padding-bottom: 10px;
        color: grey;
        font-size: 15px;
    }

    .read-section a {
        text-decoration: none;
        color: white;
        font-weight: 600;
        font-size: 13px;
    }

    .read-section {
        padding-top:20px;
        padding-left: 30px;
    }
`

export const BlogCard = styled(Container) `
    padding: 0px;
    padding-top: 50px;
    margin: 0;

    .date-category {
        color: grey;
        font-size: 13px;
        font-weight: 300;
    }
    
    .title-card {
        color: #0B0023;
        font-weight: 500;
        font-size: 30px;
    }

    .text-card {
        font-size: 16px;
        padding-top: 10px;
        padding-bottom: 15px;
    }

    .read-article {
        color: #3800B0 !important;
        font-size: 14px;
        padding: 0;
        margin: 0;
        text-decoration: none;
        font-weight: 600;
    }
`

export const PaginationSection = styled(Container) `
    display: flex;
    justify-content: center;
    padding-bottom: 70px;
    padding-top: 50px;

    @media screen and (max-width: ${({ theme })=> theme.breakPoints.sm}){
        padding-left: 0px;
        padding-right: 0px;
    }
`

export const Loading = styled.h4`
    font-size: 14px;
    font-weight: 600;
    text-align: center;
    color: #3800B0;
    padding-top: 50px;
    padding-bottom: 100px;
`