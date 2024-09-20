import React from "react"
import { render } from "@testing-library/react-native"
import BannerCarousel from "../../../src/components/BannerCarousel"

describe("components/BannerCarousel" , () => {
    // test("renders correctly",() => {
    //     const {toJSON } = render(<BannerCarousel />)

    //     expect(toJSON()).toMatchSnapshot()
    
    // })
    test("renders children number correctly", () => {
        const {getByTestId} = render(<BannerCarousel />)
        const banner = getByTestId('banner-carousel')
        expect(banner.props.data.length).toBe(4)
    
    })

})