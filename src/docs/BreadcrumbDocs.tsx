import { Component, For } from "solid-js";
import Breadcrumb from "../../packages/bootstrap/src/Breadcrumb";

export const BreadcrumbDocs: Component = () => {
  return (
    <div class="row gy-4">
      <div>
        <h3>Breadcrumbs</h3>
        <p class="lead">
          Indicate the current page’s location within a navigational hierarchy
          that automatically adds separators via CSS. Add active prop to active
          Breadcrumb.Item . Do not set both active and href attributes. active
          overrides href and span element is rendered instead of a .
        </p>
      </div>
      <div>
        <Breadcrumb>
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
            Library
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Data</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </div>
  );
};