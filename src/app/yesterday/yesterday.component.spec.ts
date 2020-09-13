import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PopulationService } from '../service/population.service';
import { YesterdayComponent } from './yesterday.component';


describe('YesterdayComponent', () => {
  let component: YesterdayComponent;
  let fixture: ComponentFixture<YesterdayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], providers: [PopulationService],
      declarations: [ YesterdayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YesterdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
