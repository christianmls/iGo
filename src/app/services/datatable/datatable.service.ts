import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatatableService {

  constructor() { }

  getOptions(name: string, columns: any) {
    return {
      pagingType: 'full_numbers',
      pageLength: 10,
      dom: 'Bfrtip',
      "oLanguage": {
        "sProcessing":     "Procesando...",
        "sLengthMenu":     "Mostrar _MENU_ registros",
        "sZeroRecords":    "No se encontraron resultados",
        "sEmptyTable":     "Ningún dato disponible en esta tabla",
        "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
        "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0 registros",
        "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
        "sInfoPostFix":    "",
        "sSearch":         "Buscar:",
        "sUrl":            "",
        "sInfoThousands":  ",",
        "sLoadingRecords": "Cargando...",
        "oPaginate": {
            "sFirst":    "Primero",
            "sLast":     "Último",
            "sNext":     "Siguiente",
            "sPrevious": "Anterior"
        },
        "oAria": {
            "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
            "sSortDescending": ": Activar para ordenar la columna de manera descendente"
        },
        "buttons": {
            "copy": "Copiar",
            "colvis": "Visibilidad"
        }
    },
      buttons: [
        {
          extend: 'colvis'
        },
        {
          extend: 'copy'
        },
        {
          extend: 'excel',
          filename: name,
          exportOptions: {
            columns: columns
          }
        },
        {
          extend: 'pdf',
          filename: name,
          exportOptions: {
            columns: columns
          }
        }
      ],
      exportOptions: {
        modifier: {
          // DataTables core
          order: 'index', // 'current', 'applied',
          //'index', 'original'
          page: 'all', // 'all', 'current'
          search: 'none' // 'none', 'applied', 'removed'
        },
        columns: columns
      }
    };
  }
}
