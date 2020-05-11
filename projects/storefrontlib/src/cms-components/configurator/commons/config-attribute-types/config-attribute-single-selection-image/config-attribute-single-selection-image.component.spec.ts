import { ChangeDetectionStrategy } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Configurator } from '@spartacus/core';
import { ConfigUIKeyGeneratorService } from '../../service/config-ui-key-generator.service';
import { ConfigAttributeSingleSelectionImageComponent } from './config-attribute-single-selection-image.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { By } from '@angular/platform-browser';

describe('ConfigAttributeSingleSelectionImageComponent', () => {
  let component: ConfigAttributeSingleSelectionImageComponent;
  let fixture: ComponentFixture<ConfigAttributeSingleSelectionImageComponent>;
  let htmlElem: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ConfigAttributeSingleSelectionImageComponent],
      imports: [ReactiveFormsModule, NgSelectModule],
      providers: [ConfigUIKeyGeneratorService],
    })
      .overrideComponent(ConfigAttributeSingleSelectionImageComponent, {
        set: {
          changeDetection: ChangeDetectionStrategy.Default,
        },
      })
      .compileComponents();
  }));

  function createImage(url: string, altText: string): Configurator.Image {
    const image: Configurator.Image = {
      url: url,
      altText: altText,
    };
    return image;
  }

  function createValue(
    code: string,
    name: string,
    isSelected: boolean,
    images: Configurator.Image[]
  ): Configurator.Value {
    const value: Configurator.Value = {
      valueCode: code,
      name: name,
      selected: isSelected,
      images: images,
    };
    return value;
  }

  beforeEach(() => {
    const image = createImage('url', 'altText');
    const images: Configurator.Image[] = [image, image, image];
    const value1 = createValue('1', 'val1', false, images);
    const value2 = createValue('2', 'val2', false, images);
    const value3 = createValue('3', 'val3', false, images);
    const values: Configurator.Value[] = [value1, value2, value3];

    fixture = TestBed.createComponent(
      ConfigAttributeSingleSelectionImageComponent
    );
    component = fixture.componentInstance;
    htmlElem = fixture.nativeElement;

    component.attribute = {
      name: 'attributeName',
      attrCode: 444,
      uiType: Configurator.UiType.SINGLE_SELECTION_IMAGE,
      required: false,
      selectedSingleValue: values[2].valueCode,
      values: values,
    };
    fixture.detectChanges();
  });

  it('should create a component', () => {
    expect(component).toBeTruthy();
  });

  it('should render 3 images', () => {
    component.ngOnInit();
    fixture.detectChanges();

    expect(
      htmlElem.querySelectorAll('.cx-config-attribute-value-img').length
    ).toBe(3);
  });

  it('should init with val3', () => {
    fixture.detectChanges();
    expect(component.attributeRadioButtonForm.value).toEqual(
      component.attribute.values[2].valueCode
    );
  });

  it('should select another single selection image value', () => {
    const singleSelectionImageId =
      '#cx-config--single_selection_image--' +
      component.attribute.name +
      '--' +
      component.attribute.values[1].valueCode +
      '-input';
    const valueToSelect = fixture.debugElement.query(
      By.css(singleSelectionImageId)
    ).nativeElement;
    expect(valueToSelect.checked).toBe(false);
    valueToSelect.click();
    fixture.detectChanges();
    expect(valueToSelect.checked).toBe(true);
    expect(component.attributeRadioButtonForm.value).toEqual(
      component.attribute.values[1].valueCode
    );
  });
});
