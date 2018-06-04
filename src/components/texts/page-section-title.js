
import { LitElement, html } from '@polymer/lit-element';

class PageSectionTitle extends LitElement {

  static get properties() {
    return {
      text: String,
    };
  }
  _render ({text}) {
    // Template getter must return an instance of HTMLTemplateElement.
    // The html helper function makes this easy.
    return html`
      <style>
        :host {
          display: block;
          padding-top: 48px;
          font-size: 24px;
          color: var(--text-color);
        }
      </style>
      
      <div>${text}</div>
      
    `;
  }
}

// Register the element with the browser.
/* global customElements */
customElements.define('page-section-title', PageSectionTitle);