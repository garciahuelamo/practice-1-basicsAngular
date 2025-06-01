import { Routes } from '@angular/router';
import { AddElementComponent } from '../components/add-element/add-element.component';
import { CounterElementComponent } from '../components/counter-element/counter-element.component';
import { FormdataElementComponent } from '../components/formdata-element/formdata-element.component';

export const routes: Routes = [

    {
        path: 'add-element',
        component: AddElementComponent
    },
    {
        path: 'counter-element',
        component: CounterElementComponent
    },
    {
        path: 'formdata-element',
        component: FormdataElementComponent
    }
];
