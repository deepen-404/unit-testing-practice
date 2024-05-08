import { render, screen } from "@testing-library/react";
import ProductImageGallery from "../../src/components/ProductImageGallery";

describe("ProductImageGallery", () => {
  it("should nothing if given an empty array", () => {
    const { container } = render(<ProductImageGallery imageUrls={[]} />);
    expect(container).toBeEmptyDOMElement();
  });
  it("should  render the images", () => {
    const imageUrls = [
      "https://something.com",
      "https://something-2.com",
      "https://something-3.com",
    ];
    const { debug } = render(<ProductImageGallery imageUrls={imageUrls} />);

    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(3);
    images.forEach((image, index) => {
      expect(image).toHaveAttribute("src", imageUrls[index]);
    });

    debug();
  });
});
