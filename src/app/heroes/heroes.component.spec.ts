import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesComponent } from './heroes.component';
import {Hero} from '../hero';
import { ComponentFixtureAutoDetect } from '@angular/core/testing';
import {FormsModule} from '@angular/forms';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;

  const expectedHero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroesComponent ],
      providers: [
        { provide: ComponentFixtureAutoDetect, useValue: true }
      ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Hero should be "Windstorm"', () => {
    expect(component.hero).toEqual(expectedHero);
  });

  it(`Hero's info should be displayed`, async () => {
    const heroInput = await getHeroInput();
    const heroId = await getHeroId();
    const heroDetailTitle = await getHeroDetailTitle();

    expect(heroInput.value).toEqual(expectedHero.name);
    expect(heroId.textContent).toEqual(expectedHero.id.toString());
    expect(heroDetailTitle.textContent).toContain(expectedHero.name.toUpperCase());
  });

  it(`Hero's name updates when changed`, async () => {
    const nameValue = 'some value';
    await inputHeroName(nameValue);
    fixture.detectChanges();

    const heroDetailTitle = await getHeroDetailTitle();

    expect(heroDetailTitle.textContent).toContain(nameValue.toUpperCase());
  });

  async function inputHeroName(value: string): Promise<void> {
    const heroNameInput = await getHeroInput();
    heroNameInput.value = value;
    heroNameInput.dispatchEvent(new Event('input'));
  }

  async function getHeroInput(): Promise<HTMLInputElement> {
    const nativeComponent = await getCompiledElement();
    return nativeComponent.querySelector('#hero-name-input');
  }

  async function getHeroId(): Promise<HTMLElement> {
    const nativeComponent = await getCompiledElement();
    return nativeComponent.querySelector('#hero-id');
  }

  async function getHeroDetailTitle(): Promise<HTMLElement> {
    const nativeComponent = await getCompiledElement();
    return nativeComponent.querySelector('#hero-details-title');
  }

  async function getCompiledElement(): Promise<any> {
    fixture.detectChanges();
    await fixture.whenStable();
    return fixture.debugElement.nativeElement;
  }
});
